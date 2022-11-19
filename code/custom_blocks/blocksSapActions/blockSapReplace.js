export const typeBlockSapReplace = "blockSapReplace";

export const definitionBlockSapReplace = {
    "type": typeBlockSapReplace,
    "message0": "replace %1 target string: %2 find: %3 replace with: %4",
    "args0": [
        {
            "type": "input_dummy"
        },
        {
            "type": "input_value",
            "name": "originString",
            "check": "String"
        },
        {
            "type": "input_value",
            "name": "findString",
            "check": "String"
        },
        {
            "type": "input_value",
            "name": "replaceWithString",
            "check": "String"
        }
    ],
    "inputsInline": false,
    "output": null,
    "colour": 120,
    "tooltip": typeBlockSapReplace,
    "helpUrl": "",
};

export const codeBlockSapReplace = function(block) {
    let origin_string = Blockly.Lua.valueToCode(block, 'originString', Blockly.Lua.ORDER_ATOMIC);
    let find_string = Blockly.Lua.valueToCode(block, 'findString', Blockly.Lua.ORDER_ATOMIC);
    let replace_with_string = Blockly.Lua.valueToCode(block, 'replaceWithString', Blockly.Lua.ORDER_ATOMIC);
    let code = `Replace(${origin_string}, ${find_string}, ${replace_with_string})`;
    return [code, null];
};