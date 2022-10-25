Blockly.defineBlocksWithJsonArray([
    {
        "type": "blockSapGo",
        "message0": "go to %1 transaction: %2",
        "args0": [
            {
                "type": "input_dummy"
            },
            {
                "type": "field_input",
                "name": "transactionName",
                "text": "transactionName"
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 230,
        "tooltip": "",
        "helpUrl": ""
    }
]);

Blockly.Lua['blockSapGo'] = function(block) {
    let text_transactionname = block.getFieldValue('transactionName');
    let code = `sapGo "/n${text_transactionname}", ""
    `;
    return code;
};