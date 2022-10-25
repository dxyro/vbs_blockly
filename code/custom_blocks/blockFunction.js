Blockly.defineBlocksWithJsonArray([
    {
        "type": "blockFunction",
        "message0": "private function %1 name: %2 %3 %4",
        "args0": [
            {
                "type": "input_dummy"
            },
            {
                "type": "field_input",
                "name": "functionName",
                "text": "functionName"
            },
            {
                "type": "input_dummy"
            },
            {
                "type": "input_statement",
                "name": "operations",
                "check": "operations"
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 230,
        "tooltip": "",
        "helpUrl": ""
    }
]);

Blockly.Lua['blockFunction'] = function(block) {
    let text_functionname = block.getFieldValue('functionName');
    let statements_operations = Blockly.Lua.statementToCode(block, 'operations');
    let code = `
    Private Function ${text_functionname}()
    ${statements_operations}
    End Sub
    `;
    return code;
};