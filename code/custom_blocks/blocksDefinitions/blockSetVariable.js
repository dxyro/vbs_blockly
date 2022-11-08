export const typeBlockSetVariable = "blockSetVariable";

export const definitionBlockSetVariable = {
    "type": typeBlockSetVariable,
    "message0": "set variable %1 type: %2 %3 to: %4",
    "args0": [
    {
        "type": "input_dummy",
        "name": "dynamicName",
    },
    {
        "type": "field_dropdown",
        "name": "varType",
        "options": [["String","S"], ["Number","N"], ["Boolean","B"]]
    },
    {
        "type": "input_dummy"
    },
    {
        "type": "input_value",
        "name": "varValue"
    }
],
    "inputsInline": false,
    "previousStatement": null,
    "nextStatement": null,
    "colour": 330,
    "tooltip": typeBlockSetVariable,
    "helpUrl": "",
    "extensions": ["extDynamicVariableDropDown"]
};

export const codeBlockSetVariable = function(block) {
    let drop_variableChoosen = block.getFieldValue('variableChoosen');
    let dropdown_type = block.getFieldValue('varType');
    let value_name = Blockly.Lua.valueToCode(block, 'varValue', Blockly.Lua.ORDER_ATOMIC);
    let code;
    if(dropdown_type==="S"){
        code = `${drop_variableChoosen} = "${value_name}"`;
    }else{
        code = `${drop_variableChoosen} = ${value_name}`;
    }
    return code;
};
