export const typeBlockGetVariable = "blockGetVariable"

export const definitionBlockGetVariable = {
    "type": typeBlockGetVariable,
    "message0": "variable: %1 %2",
    "args0": [
    {
        "type": "input_dummy"
    },
    {
        "type": "input_dummy",
        "name": "dynamicName",
    }
],
    "inputsInline": true,
    "output": null,
    "colour": 330,
    "tooltip": typeBlockGetVariable,
    "helpUrl": "",
    "extensions": ["extDynamicVariableDropDown"]
};

export const codeBlockGetVariable = function(block) {
    let drop_variableChoosen = block.getFieldValue('variableChoosen');
    let code = `${drop_variableChoosen}`;
    return [code, null];
};
