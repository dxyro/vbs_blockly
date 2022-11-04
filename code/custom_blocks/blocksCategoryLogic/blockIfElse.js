export const typeBlockIfElse = "blockIfElse";

export const definitionBlockIfElse = {
    "type": typeBlockIfElse,
    "message0": "if %1 do %2 else %3",
    "args0": [
        {
            "type": "input_value",
            "name": "condition",
            "check": "Boolean"
        },
        {
            "type": "input_statement",
            "name": "yesAction"
        },
        {
            "type": "input_statement",
            "name": "notAction"
        }
    ],
    "inputsInline": false,
    "previousStatement": null,
    "nextStatement": null,
    "colour": 290,
    "tooltip": typeBlockIfElse,
    "helpUrl": ""
};

export const codeBlockIfElse = function(block) {
    var value_condition = Blockly.Lua.valueToCode(block, 'condition', Blockly.Lua.ORDER_ATOMIC);
    var statements_yesaction = Blockly.Lua.statementToCode(block, 'yesAction');
    var statements_notaction = Blockly.Lua.statementToCode(block, 'notAction');
    var code = `
    If ${value_condition} Then
      ${statements_yesaction}
    Else
      ${statements_notaction}
    End If 
    `;
    return code;
};