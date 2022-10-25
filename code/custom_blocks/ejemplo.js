Blockly.defineBlocksWithJsonArray([
    {
        "type": "example_variable_typed",
        "message0": "variable: %1",
        "args0": [
            {
                "type": "field_variable",
                "name": "FIELDNAME",
                "variable": "x",
                "variableTypes": ["Number", "String"],
                "defaultType": "Number"
            }
        ]
    }
]);

Blockly.Lua['example_variable_typed'] = function(block) {
    code = 'trthtyhjtujtjujytu'
    return code
};