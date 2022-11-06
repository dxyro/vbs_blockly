export const typeBlockSubProcedure = "blockSubProcedure";

export const definitionBlockSubProcedure = {
    "type": typeBlockSubProcedure,
    "message0": "process %1 name: %2 %3 %4",
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
            "check": "blockSapParameter"
        }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 230,
    "tooltip": typeBlockSubProcedure,
    "helpUrl": ""
};

export const codeBlockSubProcedure = function(block) {
    let text_subname = block.getFieldValue('subName');
    let statements_parameters = Blockly.Lua.statementToCode(block, 'parameters');
    let code = `
    Public Sub ${text_subname}()
    ${statements_parameters}
    End Sub\n`;
    return code;
};