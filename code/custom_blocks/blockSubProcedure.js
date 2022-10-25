Blockly.defineBlocksWithJsonArray([
    {
        "type": "blockSubProcesure",
        "message0": "sub procedure %1 name: %2 %3 %4",
        "args0": [
            {
                "type": "input_dummy"
            },
            {
                "type": "field_input",
                "name": "subName",
                "text": "subName"
            },
            {
                "type": "input_dummy"
            },
            {
                "type": "input_statement",
                "name": "parameters",
                "check": "blockSapStaticParameter"
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 230,
        "tooltip": "",
        "helpUrl": ""
    }
]);

Blockly.Lua['blockSubProcesure'] = function(block) {
    let text_subname = block.getFieldValue('subName');
    let statements_parameters = Blockly.Lua.statementToCode(block, 'parameters');
    let code = `\tPublic Sub ${text_subname}()
    ${statements_parameters}
    \tEnd Sub\n`;
    return code;
};