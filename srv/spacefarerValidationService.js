export function getAllowedPlanets(req) {
    const aPlanets = req.user.attributes.planet[0];

    if (!aPlanets) {
        return [];
    }

    return Array.isArray(aPlanets) ? aPlanets : [aPlanets];
}


export function hasPlanetAccess(req, planet) {
    const aAllowedPlanets = getAllowedPlanets(req);

    return aAllowedPlanets.includes(planet);
}