export const typeBlockFunctionContent = "blockFunctionContent";

export const definitionBlockFunctionContent = {
    "type": typeBlockFunctionContent,
    "message0": "main logic %1 %2",
    "args0": [
        {
            "type": "input_dummy"
        },
        {
            "type": "input_statement",
            "name": "operations",
            "check": "operations"
        }
    ],
    "previousStatement": "blockClass",
    "nextStatement": "blockFunction",
    "colour": 230,
    "tooltip": typeBlockFunctionContent,
    "helpUrl": "",
    "extensions": ["extWarningOnFunctionContentChange"]
};

export const codeBlockFunctionContent = function(block) {
    let statements_operations = Blockly.Lua.statementToCode(block, 'operations');
    let code = `
    Private Function content()
    ${statements_operations}
    End Sub
    \n`;
    return code;
};