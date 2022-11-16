export const typeBlockSapAlerts = "blockSapAlerts";

export const definitionBlockSapAlerts = {
    "type": typeBlockSapAlerts,
    "message0": "sap alerts",
    "output": "String",
    "colour": 120,
    "tooltip": typeBlockSapAlerts,
    "helpUrl": "./blocks_documentation/blocksSapActions/blockSapAlertsHelp.html"
};

export const codeBlockSapAlerts = function(block) {
    let code = 'sapAllAlerts';
    return [code, null];
};