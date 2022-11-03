export const typeBlockLowerCase = "blockLowerCase";

export const definitionBlockLowerCase = {
    "type": typeBlockLowerCase,
    "message0": "to lower string: %1",
    "args0": [
        {
            "type": "input_value",
            "name": "stringTarget",
            "check": "String"
        }
    ],
    "output": "String",
    "colour": 70,
    "tooltip": typeBlockLowerCase,
    "helpUrl": ""
};

export const codeBlockLowerCase = function(block) {
    let value_stringtarget = Blockly.Lua.valueToCode(block, 'stringTarget', Blockly.Lua.ORDER_ATOMIC);
    let code = `LCase(${value_stringtarget})`;
    return [code,null];
};