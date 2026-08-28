using SpacefarerService as service from '../../srv/service';
annotate service.Spacefarers with @(
    UI.FieldGroup #GeneratedGroup : {
        $Type : 'UI.FieldGroupType',
        Data : [
            {
                $Type : 'UI.DataField',
                Value : name,
            },
            {
                $Type : 'UI.DataField',
                Label : '{i18n>Stardustcollection}',
                Value : stardustCollection,
            },
            {
                $Type : 'UI.DataField',
                Label : '{i18n>Wormholenav}',
                Value : wormholeNav,
            },
            {
                $Type : 'UI.DataField',
                Label : '{i18n>Originplanet}',
                Value : originPlanet,
            },
            {
                $Type : 'UI.DataField',
                Label : '{i18n>Spacesuitcol}',
                Value : spacesuitCol,
            },
        ],
    },
    UI.Facets : [
        {
            $Type : 'UI.ReferenceFacet',
            ID : 'GeneratedFacet1',
            Label : 'General Information',
            Target : '@UI.FieldGroup#GeneratedGroup',
        },
        {
            $Type : 'UI.ReferenceFacet',
            Label : 'Position',
            ID : 'Position',
            Target : '@UI.FieldGroup#Position',
        },
    ],
    UI.LineItem : [
        {
            $Type : 'UI.DataField',
            Label : '{i18n>Name1}',
            Value : name,
        },
        {
            $Type : 'UI.DataField',
            Label : '{i18n>Stardustcollection}',
            Value : stardustCollection,
        },
        {
            $Type : 'UI.DataField',
            Label : '{i18n>Wormholenav}',
            Value : wormholeNav,
        },
        {
            $Type : 'UI.DataField',
            Label : '{i18n>Originplanet}',
            Value : originPlanet,
        },
        {
            $Type : 'UI.DataField',
            Label : '{i18n>Spacesuitcol}',
            Value : spacesuitCol,
        },
    ],
    UI.SelectionFields : [
        name,
        originPlanet,
        spacesuitCol,
        wormholeNav,
        stardustCollection,
    ],
    UI.HeaderInfo : {
        TypeName : '{i18n>Spacefarers}',
        TypeNamePlural : '',
        Title : {
            $Type : 'UI.DataField',
            Value : name,
        },
    },
    UI.FieldGroup #Position : {
        $Type : 'UI.FieldGroupType',
        Data : [
            {
                $Type : 'UI.DataField',
                Value : Position.name,
                Label : '{i18n>Name}',
            },
            {
                $Type : 'UI.DataField',
                Value : Position.createdBy,
            },
        ],
    },
);

annotate service.Spacefarers with {
    department @Common.ValueList : {
        $Type : 'Common.ValueListType',
        CollectionPath : 'Departments',
        Parameters : [
            {
                $Type : 'Common.ValueListParameterInOut',
                LocalDataProperty : department_ID,
                ValueListProperty : 'ID',
            },
            {
                $Type : 'Common.ValueListParameterDisplayOnly',
                ValueListProperty : 'name',
            },
            {
                $Type : 'Common.ValueListParameterDisplayOnly',
                ValueListProperty : 'description',
            },
        ],
    }
};

annotate service.Spacefarers with {
    name @(
        Common.Label : '{i18n>Name}',
        Common.FieldControl : #Mandatory,
    )
};

annotate service.Spacefarers with {
    originPlanet @(
        Common.Label : '{i18n>OriginPlanet}',
        Common.FieldControl : #Mandatory,
    )
};

annotate service.Spacefarers with {
    spacesuitCol @Common.Label : '{i18n>Spacesuitcol}'
};

annotate service.Spacefarers with {
    wormholeNav @Common.Label : '{i18n>Wormholenav}'
};

annotate service.Spacefarers with {
    stardustCollection @Common.Label : '{i18n>Stardustcollection}'
    };
    
annotate service.Positions with {
    name @Common.FieldControl : #ReadOnly
};

//annotation to hide the status filter, found at https://help.sap.com/docs/ABAP_PLATFORM_NEW/468a97775123488ab3345a0c48cadd8f/8eb695ac473b4ab0a726e4021ce35cf4.html?locale=en-US
annotate service.Spacefarers with @(
Capabilities: {
   NavigationRestrictions : {
       $Type : 'Capabilities.NavigationRestrictionsType',
       RestrictedProperties : [
           {
               $Type : 'Capabilities.NavigationPropertyRestriction',
               NavigationProperty : DraftAdministrativeData,
               FilterRestrictions : {
                   $Type : 'Capabilities.FilterRestrictionsType',
                   Filterable : false,
               },
           },
       ],
   },
});

//annotation for value help dropdown for origin planet
annotate service.Spacefarers with {
    originPlanet @(
        Common.ValueList: {
            CollectionPath: 'Planets',
            Parameters: [
                {
                    $Type: 'Common.ValueListParameterInOut',
                    LocalDataProperty: originPlanet,
                    ValueListProperty: 'name'
                }
            ]
        },
        Common.ValueListWithFixedValues: true
    );
};