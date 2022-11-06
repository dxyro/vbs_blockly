import {camelize} from '../Commons/allCommons.js'

export const typeBlockCallFunction = "blockCallFunction";

export const definitionBlockCallFunction = {
    "type": typeBlockCallFunction,
    "message0": "call %1 function: %2",
    "args0": [
    {
        "type": "input_dummy"
    },
    {
        "type": "input_dummy",
        "name": "pFunction",
    }
],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 230,
    "tooltip": typeBlockCallFunction,
    "helpUrl": "",
    "extensions": ["extDynamicFunctionDropDown"]
};

export const codeBlockCallFunction = function(block) {
    let drop_functionChoosen = camelize(block.getFieldValue('functionChoosen'));
    var code = `
    ${drop_functionChoosen}()
    `;
    return code;
};