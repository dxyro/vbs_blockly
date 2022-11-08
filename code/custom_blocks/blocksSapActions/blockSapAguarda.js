export const typeBlockSapAguarda = "blockSapAguarda";

export const definitionBlockSapAguarda = {
    "type": typeBlockSapAguarda,
    "message0": "wait %1 seconds: %2",
    "args0": [
        {
            "type": "input_dummy"
        },
        {
            "type": "field_number",
            "name": "seconds",
            "value": 10,
            "min": 0
        }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 120,
    "tooltip": typeBlockSapAguarda,
    "helpUrl": ""
};

export const codeBlockSapAguarda = function(block) {
    let number_seconds = block.getFieldValue('seconds');
    let code = `
    aguarda ${number_seconds}
    \n`;
    return code;
};