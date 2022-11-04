export const typeBlockSapGo = "blockSapGo";

export const definitionBlockSapGo = {
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
    "previousStatement": "operations",
    "nextStatement": null,
    "colour": 120,
    "tooltip": "blockSapGo",
    "helpUrl": ""
};

export const codeBlockSapGo = function(block) {
    let text_transactionname = block.getFieldValue('transactionName');
    let code = `
    sapGo "/n${text_transactionname}", ""
    \n`;
    return code;
};