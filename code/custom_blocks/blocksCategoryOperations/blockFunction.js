import {camelize} from '../Commons/allCommons.js'

export const typeBlockFunction = "blockFunction"

export const definitionBlockFunction = {
    "type": typeBlockFunction,
    "message0": "function %1 name: %2 %3 %4",
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
    "previousStatement": "blockFunction",
    "nextStatement": "blockFunction",
    "colour": 230,
    "tooltip": typeBlockFunction,
    "helpUrl": ""
};

export const codeBlockFunction = function(block) {
    let text_functionname = camelize(block.getFieldValue('functionName'));
    let statements_operations = Blockly.Lua.statementToCode(block, 'operations');
    let code = `
    Private Function ${text_functionname}()
    ${statements_operations}
    End Sub
    \n`;
    return code;
};