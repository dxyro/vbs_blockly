export const typeBlockMainContent = "blockMainContent";

export const definitionBlockMainContent = {
    "type": typeBlockMainContent,
    "message0": "main %1 content: %2",
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
    "tooltip": typeBlockMainContent,
    "helpUrl": "",
    "extensions": ["extWarningOnFunctionContentChange"]
};

export const codeBlockMainContent = function(block) {
    let statements_operations = Blockly.Lua.statementToCode(block, 'operations');
    let code = `
    Private Function content()
    ${statements_operations}
    End Sub
    \n`;
    return code;
};