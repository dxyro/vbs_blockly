Blockly.defineBlocksWithJsonArray([
    {
        "type": "blockAguarda",
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
        "colour": 230,
        "tooltip": "",
        "helpUrl": ""
    }
]);

Blockly.Lua['blockAguarda'] = function(block) {
    let number_seconds = block.getFieldValue('seconds');
    let code = `aguarda ${number_seconds}
    `;
    return code;
};