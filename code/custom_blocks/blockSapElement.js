Blockly.defineBlocksWithJsonArray([
    {
        "type": "blockSapElement",
        "message0": "sap element %1 element: %2",
        "args0": [
            {
                "type": "input_dummy"
            },
            {
                "type": "field_input",
                "name": "element",
                "text": "FB_"
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 230,
        "tooltip": "",
        "helpUrl": ""
    }
]);

// TODO: define the appropriate type "name" for block something like block_anything

Blockly.Lua['blockSapElement'] = function(block) {
    let text_element = block.getFieldValue('element');
    let code = `Public ${text_element}
    `;
    return code;
};