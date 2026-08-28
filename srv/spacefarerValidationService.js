/**
 * Gives back the authorized planets
 * @param {object} req - request object
 * @returns - array for the authorized objects
 */
export function getAllowedPlanets(req) {
    //get the authorized planet
    const aPlanets = req.user.attributes.planet[0];

    if (!aPlanets) {
        return [];
    }

    return Array.isArray(aPlanets) ? aPlanets : [aPlanets];
}


/**
 * Checks if the user has access for the planet
 * @param {object} req - request object
 * @param {string} planet - the authorized planet 
 * @returns - returns if the user has access to the planet
 */
export function hasPlanetAccess(req, planet) {
    const aAllowedPlanets = getAllowedPlanets(req);

    return aAllowedPlanets.includes(planet);
}