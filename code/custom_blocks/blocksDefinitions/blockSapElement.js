export const typeBlockSapElement = "blockSapElement";

export const definitionBlockSapElement = {
    "type": typeBlockSapElement,
    "message0": "sap element %1 element: %2",
    "args0": [
        {
            "type": "input_dummy"
        },
        {
            "type": "field_input",
            "name": "elementName",
            "text": "default"
        }
    ],
    "previousStatement": [
        "blockClass",
        "blockSapElement"
    ],
    "nextStatement": "blockSapElement",
    "colour": 330,
    "tooltip": typeBlockSapElement,
    "helpUrl": ""
};

export const codeBlockSapElement = function(block) {
    let text_elementName = block.getFieldValue('elementName');
    let code = `
    Public ${text_elementName}
    \n`;
    return code;
};
