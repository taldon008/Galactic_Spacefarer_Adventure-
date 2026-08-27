import cds from '@sap/cds'

export class SpacefarerService extends cds.ApplicationService { init() {

  const { Spacefarers, Departments, Positions } = cds.entities('SpacefarerService')

  this.before (['CREATE', 'UPDATE'], Spacefarers, async (req, spacefarers) => { //Also did the validation in case of Update
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

  this.after (['CREATE', 'UPDATE'], Spacefarers, async (req, spacefarers) => { //Also did the validation in case of Update
    
  })


  // this.after ('READ', Spacefarers, async (spacefarers, req) => {
  //   console.log('After READ Spacefarers', spacefarers)
  // })
  // this.before (['CREATE', 'UPDATE'], Departments, async (req) => {
  //   console.log('Before CREATE/UPDATE Departments', req.data)
  // })
  // this.after ('READ', Departments, async (departments, req) => {
  //   console.log('After READ Departments', departments)
  // })
  // this.before (['CREATE', 'UPDATE'], Positions, async (req) => {
  //   console.log('Before CREATE/UPDATE Positions', req.data)
  // })
  // this.after ('READ', Positions, async (positions, req) => {
  //   console.log('After READ Positions', positions)
  // })

  return super.init()
}}
