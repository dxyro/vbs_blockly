export const typeBlockTrim = "blockTrim";

export const definitionBlockTrim = {
    "type": typeBlockTrim,
    "message0": "trim %1",
    "args0": [
    {
        "type": "input_value",
        "name": "trimTarget",
        "check": "String"
    }
],
    "output": "String",
    "colour": 70,
    "tooltip": typeBlockTrim,
    "helpUrl": ""
};

export const codeBlockTrim = function(block) {
    var value_trimtarget = Blockly.Lua.valueToCode(block, 'trimTarget', Blockly.Lua.ORDER_ATOMIC);
    var code = `Trim(${value_trimtarget})`;
    return [code, null];
};