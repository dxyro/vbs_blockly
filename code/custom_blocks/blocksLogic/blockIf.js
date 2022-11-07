export const typeBlockIf = "blockIf";

export const definitionBlockIf = {
    "type": typeBlockIf,
    "message0": "if %1 do %2",
    "args0": [
        {
            "type": "input_value",
            "name": "condition",
            "check": "Boolean"
        },
        {
            "type": "input_statement",
            "name": "yesAction"
        }
    ],
    "inputsInline": false,
    "previousStatement": null,
    "nextStatement": null,
    "colour": 290,
    "tooltip": typeBlockIf,
    "helpUrl": ""
};

export const codeBlockIf = function(block) {
    var value_condition = Blockly.Lua.valueToCode(block, 'condition', Blockly.Lua.ORDER_ATOMIC);
    var statements_yesaction = Blockly.Lua.statementToCode(block, 'yesAction');
    var code = `
    If ${value_condition} Then
      ${statements_yesaction}
    End If 
    `;
    return code;
};