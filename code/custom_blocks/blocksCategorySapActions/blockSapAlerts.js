export const typeBlockSapAlerts = "blockSapAlerts";

export const definitionBlockSapAlerts = {
    "type": typeBlockSapAlerts,
    "message0": "sap alerts",
    "output": "String",
    "colour": 120,
    "tooltip": typeBlockSapAlerts,
    "helpUrl": ""
};

export const codeBlockSapAlerts = function(block) {
    var code = 'sapAllAlerts';
    return [code, null];
};