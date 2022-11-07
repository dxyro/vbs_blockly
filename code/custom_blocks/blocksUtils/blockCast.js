export const typeBlockCast = "blockCast";

export const definitionBlockCast = {
    "type": typeBlockCast,
    "message0": "toString %1",
    "args0": [
        {
            "type": "input_value",
            "name": "castTarget",
        }
    ],
    "output": "String",
    "colour": 70,
    "tooltip": typeBlockCast,
    "helpUrl": ""
};

export const codeBlockCast = function(block) {
    var value_casttarget = Blockly.Lua.valueToCode(block, 'castTarget', Blockly.Lua.ORDER_ATOMIC);
    var code = `Cstr(${value_casttarget})`;
    return [code, null];
};