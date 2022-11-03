export const typeBlockSapLogger = "blockSapLogger";

export const definitionBlockSapLogger = {
    "type": typeBlockSapLogger,
    "message0": "log %1 message: %2",
    "args0": [
        {
            "type": "input_dummy"
        },
        {
            "type": "field_input",
            "name": "message",
            "text": "custom message"
        }
    ],
    "inputsInline": false,
    "previousStatement": null,
    "nextStatement": null,
    "colour": 120,
    "tooltip": typeBlockSapLogger,
    "helpUrl": ""
};

export const codeBlockSapLogger = function(block) {
    let text_message = block.getFieldValue('message');
    let code = `
    logger "${text_message}"
    \n`;
    return code;
};