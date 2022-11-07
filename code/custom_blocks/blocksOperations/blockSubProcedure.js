import {camelize} from '../commons/allCommons.js'

export const typeBlockSubProcedure = "blockSubProcedure";

export const definitionBlockSubProcedure = {
    "type": typeBlockSubProcedure,
    "message0": "sub process %1 name: %2 %3 actions:%4",
    "args0": [
        {
            "type": "input_dummy"
        },
        {
            "type": "field_input",
            "name": "subName",
            "text": "processName"
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
    "helpUrl": "./blocks_documentation/blocksOperations/blockSubProcedureHelp.html"
};

export const codeBlockSubProcedure = function(block) {
    let text_subname = camelize(block.getFieldValue('subName'));
    let statements_parameters = Blockly.Lua.statementToCode(block, 'parameters');
    let code = `
    Public Sub ${text_subname}()
    ${statements_parameters}
    End Sub\n`;
    return code;
};