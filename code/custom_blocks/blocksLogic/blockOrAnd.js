export const typeBlockOrAnd = "blockOrAnd";

export const definitionBlockOrAnd = {
    "type": typeBlockOrAnd,
    "message0": "%1 %2 %3",
    "args0": [
    {
        "type": "input_value",
        "name": "firtsCodition",
        "check": "Boolean"
    },
    {
        "type": "field_dropdown",
        "name": "or_and",
        "options": [["Or","O"], ["And","A"]]
    },
    {
        "type": "input_value",
        "name": "secondCondition",
        "check": "Boolean"
    }
],
    "inputsInline": true,
    "output": "Boolean",
    "colour": 290,
    "tooltip": typeBlockOrAnd,
    "helpUrl": ""
};


export const codeBlockOrAnd= function(block) {
    let value_firtscodition = Blockly.Lua.valueToCode(block, 'firtsCodition', Blockly.Lua.ORDER_ATOMIC);
    let value_secondcondition = Blockly.Lua.valueToCode(block, 'secondCondition', Blockly.Lua.ORDER_ATOMIC);
    let dropdown_or_and = block.getFieldValue('or_and');
    let logicOption;
    if(dropdown_or_and==='O'){
        logicOption = "Or";
    }else{
        logicOption = "And";
    }

    let code = `${value_firtscodition} ${logicOption} ${value_secondcondition}`;
    return [code, null];
};