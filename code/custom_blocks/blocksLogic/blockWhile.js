export const typeBlockWhile = "blockWhile";

export const definitionBlockWhile = {
    "type": typeBlockWhile,
    "message0": "while %1 do %2",
    "args0": [
        {
            "type": "input_value",
            "name": "condition",
            "check": "Boolean"
        },
        {
            "type": "input_statement",
            "name": "do"
        }
    ],
    "inputsInline": false,
    "previousStatement": "operations",
    "nextStatement": "operations",
    "colour": 290,
    "tooltip": typeBlockWhile,
    "helpUrl": "",
    "extensions": ["extWarningOnWhileChange"]
};

export const codeBlockWhile = function(block) {
    let value_condition = Blockly.Lua.valueToCode(block, 'condition', Blockly.Lua.ORDER_ATOMIC);
    let statements_do = Blockly.Lua.statementToCode(block, 'do');
    let code = `
    While ${value_condition}
    ${statements_do}
    Wend
    `;
    return code;
};