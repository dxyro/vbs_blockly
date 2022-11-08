export const typeBlockSapElement = "deprecatedBlockSapElement";

export const definitionDeprecatedBlockSapElement = {
    "type": typeBlockSapElement,
    "message0": "sap element %1 element: %2",
    "args0": [
        {
            "type": "input_dummy"
        },
        {
            "type": "input_dummy",
            "name": "sapElement",
        }
    ],
    "previousStatement": [
        "blockClass",
        "blockSapElement"
    ],
    "nextStatement": "blockSapElement",
    "colour": 330,
    "tooltip": typeBlockSapElement,
    "helpUrl": "",
    "extensions": ["extDynamicSapElementDropDown"]
};

export const codeDeprecatedBlockSapElement = function(block) {
    let drop_elementChoosen = block.getFieldValue('elementChoosen');
    let code = '';
    if (drop_elementChoosen){
        code = `
    Public ${drop_elementChoosen}
    \n`;
    }
    return code;
};
