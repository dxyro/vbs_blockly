Blockly.defineBlocksWithJsonArray([
    {
        "type": "blockSapEnter",
        "message0": "press enter",
        "previousStatement": null,
        "nextStatement": null,
        "colour": 230,
        "tooltip": "",
        "helpUrl": ""
    }
]);

Blockly.Lua['blockSapEnter'] = function(block) {
    let code = `sapPressEnter
    `;
    return code;
};