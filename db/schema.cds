namespace galactic.spacefarer.db;

using {cuid, managed} from '@sap/cds/common';

entity Departments : cuid, managed {
    name        : String;
    description : String;
    spacefarers : Association to many Spacefarers on spacefarers.department = $self;
}

entity Positions : cuid, managed {
    key spacefarer : Association to Spacefarers;
        name        : String(100);
}

entity Spacefarers : cuid, managed {
    name : String(100);
    stardustCollection : Integer;
    wormholeNav : Integer;
    originPlanet : String(100);
    spacesuitCol : String(50);
    department : Association to Departments;
    Position : Composition of many Positions on Position.spacefarer = $self;
}
