import cds from '@sap/cds'
import { sendWelcomeEmail } from './mailService.js'
import {
  getAllowedPlanets,
  hasPlanetAccess
} from './spacefarerValidationService.js'

export class SpacefarerService extends cds.ApplicationService {
  init() {

    const { Spacefarers, Departments, Positions } = cds.entities('SpacefarerService')

    /**
     * Handler for before create/update of Spacefarers
     * Validates and increments the properties additionally
     * Sends warning messages if the original value was not enough
     */
    this.before(['CREATE', 'UPDATE'], Spacefarers, async (req, spacefarers) => { //Also did the validation in case of Update
      const warnings = [];

      if (req.data.stardustCollection < 50) {
        req.data.stardustCollection += 50;

        warnings.push(
          "You are poor, but I'm gonna give you some stardust!"
        );
      }

      if (req.data.wormholeNav < 10) {
        req.data.wormholeNav += 10;

        warnings.push(
          "You cannot drive, but I'm gonna teach you!"
        );
      }

      //Join together the warnings
      if (warnings.length > 0) {
        req.warn(400, warnings.join("\n"));
      }
    })

    /**
     * Handler for after create/update of Spacefarers
     * Because the increment will prepare correctly the Spacefarers, it will automatically sends them to their journey
     * Triggers the sending of the email
     */
    this.after(['CREATE', 'UPDATE'], Spacefarers, async (spacefarers, req) => { //Also did the validation in case of Update
      //do the validation
      const originPlanet = req.data.originPlanet;

      if (
        originPlanet && !hasPlanetAccess(req, originPlanet)
      ) {
        return req.reject(
          403,
          `You don't have permission to assign a spacefarer to ${originPlanet}.`
        );
      }
      try {
        //trigger the email with spavefarer info
        await sendWelcomeEmail(req.data);

        //confirmation message
        req.info(
          "Welcome email was sent."
        );
      } catch (error) {
        //error
        req.error(
          "The Spacefarer was created, but the welcome email could not be sent.", error
        );
      }
    })

    /**
     * Read is implemented only for the authenticated users
     */
    this.before('READ', Spacefarers, async (req) => {
      const allowedPlanets = getAllowedPlanets(req);

      if (allowedPlanets.length === 0) {
        return req.reject(403, "You don't have access to any planet.");
      }

      //only the corresponding planet's spacefarers
      req.query.where({
        originPlanet: {
          in: allowedPlanets
        }
      });
    })

    return super.init()
  }
}
