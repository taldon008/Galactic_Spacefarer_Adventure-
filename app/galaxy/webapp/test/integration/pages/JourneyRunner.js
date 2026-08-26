sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"galaxy/test/integration/pages/SpacefarersList.gen",
	"galaxy/test/integration/pages/SpacefarersObjectPage.gen",
	"galaxy/test/integration/pages/PositionsObjectPage.gen"
], function (JourneyRunner, SpacefarersListGenerated, SpacefarersObjectPageGenerated, PositionsObjectPageGenerated) {
    'use strict';

    const runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('galaxy') + '/test/flp.html#app-preview',
        pages: {
			onTheSpacefarersListGenerated: SpacefarersListGenerated,
			onTheSpacefarersObjectPageGenerated: SpacefarersObjectPageGenerated,
			onThePositionsObjectPageGenerated: PositionsObjectPageGenerated
        },
        async: true
    });

    return runner;
});

