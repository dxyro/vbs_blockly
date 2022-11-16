export const typeBlockSapAbortScript = "blockSapAbortScript";

export const definitionBlockSapAbortScript = {
    "type": typeBlockSapAbortScript,
    "message0": "abort script %1 type: %2 error %3 message: %4",
    "args0": [
    {
        "type": "input_dummy"
    },
    {
        "type": "field_dropdown",
        "name": "errorType",
        "options": [["infra","I"], ["bussines","B"], ["blocked","R"], ["unknown","U"]]
    },
    {
        "type": "input_dummy"
    },
    {
        "type": "input_value",
        "name": "message",
        "check": "String"
    }
],
    "inputsInline": false,
    "previousStatement": null,
    "nextStatement": null,
    "colour": 120,
    "tooltip": typeBlockSapAbortScript,
    "helpUrl": "./blocks_documentation/blocksSapActions/blockSapAbortScriptHelp.html"
};

export const codeBlockSapAbortScript = function(block) {
    let dropdown_errortype = block.getFieldValue('errorType');
    let value_message = Blockly.Lua.valueToCode(block, 'message', Blockly.Lua.ORDER_ATOMIC);
    let code = `
    abortScript "${dropdown_errortype}", ${value_message}
    `;
    return code;
};