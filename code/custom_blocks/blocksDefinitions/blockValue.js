export const typeBlockValue = "blockValue";

export const definitionBlockValue = {
    "type": typeBlockValue,
    "message0": "%1",
    "args0": [
    {
        "type": "field_input",
        "name": "valueField",
        "text": "value"
    }
],
    "output": null,
    "colour": 330,
    "tooltip": typeBlockValue,
    "helpUrl": ""
};

export const codeBlockValue = function(block) {
    var text_value = block.getFieldValue('valueField');
    var code = `${text_value}`;
    return [code, null];
};