export const typeBlockDeclareVariable = "blockDeclareVariable";

export const definitionBlockDeclareVariable = {
    "type": typeBlockDeclareVariable,
    "message0": "variable name: %1",
    "args0": [
    {
        "type": "field_input",
        "name": "variableName",
        "text": "default"
    }
],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 330,
    "tooltip": typeBlockDeclareVariable,
    "helpUrl": ""
};

export const codeBlockDeclareVariable = function(block) {
    let text_name = block.getFieldValue('variableName');
    let code = `
    Dim ${text_name}
    `;
    return code;
};