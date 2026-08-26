using { galactic.spacefarer.db as db } from '../db/schema';

@path: '/spacefarer'
// @requires: 'authenticated-user'
service SpacefarerService {
    // @restrict: [
    //     { grant: '*', to: 'SpacefarerUser' }
    // ]
    entity Spacefarers as projection on db.Spacefarers;
    entity Departments as projection on db.Departments;
    entity Positions as projection on db.Positions;
}