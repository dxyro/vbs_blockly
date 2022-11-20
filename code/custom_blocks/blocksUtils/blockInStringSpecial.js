export const typeBlockInStringSpecial = "blockInStringSpecial";

export const definitionBlockInStringSpecial = {
    "type": typeBlockInStringSpecial,
    "message0": "is %1 in %2",
    "args0": [
        {
            "type": "input_value",
            "name": "stringToFind",
            "check": "String"
        },
        {
            "type": "input_value",
            "name": "targetString",
            "check": "String"
        }
    ],
    "inputsInline": true,
    "output": null,
    "colour": 70,
    "tooltip": typeBlockInStringSpecial,
    "helpUrl": ""
};

export const codeBlockInStringSpecial = function(block) {
    let value_stringtofind = Blockly.Lua.valueToCode(block, 'stringToFind', Blockly.Lua.ORDER_ATOMIC);
    let value_targetstring = Blockly.Lua.valueToCode(block, 'targetString', Blockly.Lua.ORDER_ATOMIC);
    let code = `InStr(${value_targetstring}, ${value_stringtofind})`;
    return [code, null];
};