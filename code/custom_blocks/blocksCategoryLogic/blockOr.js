export const typeBlockOr = "blockOr";

export const definitionBlockOr = {
    "type": typeBlockOr,
    "message0": "%1 or %2 %3",
    "args0": [
    {
        "type": "input_value",
        "name": "firtsCodition",
        "check": "Boolean"
    },
    {
        "type": "input_dummy"
    },
    {
        "type": "input_value",
        "name": "secondCondition",
        "check": "Boolean"
    }
],
    "output": "Boolean",
    "colour": 290,
    "tooltip": typeBlockOr,
    "helpUrl": ""
};


export const codeBlockOr= function(block) {
    var value_firtscodition = Blockly.Lua.valueToCode(block, 'firtsCodition', Blockly.Lua.ORDER_ATOMIC);
    var value_secondcondition = Blockly.Lua.valueToCode(block, 'secondCondition', Blockly.Lua.ORDER_ATOMIC);
    var code = `${value_firtscodition} Or ${value_secondcondition}`;
    return [code, null];
};