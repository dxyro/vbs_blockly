export const typeBlockInString = "blockInString";

export const definitionBlockInString = {
    "type": typeBlockInString,
    "message0": "is %1 in %2 %3",
    "args0": [
        {
            "type": "field_input",
            "name": "stringToFind",
            "text": "string"
        },
        {
            "type": "input_dummy"
        },
        {
            "type": "input_value",
            "name": "targetString",
            "check": "String"
        }
    ],
    "inputsInline": true,
    "output": "Boolean",
    "colour": 70,
    "tooltip": typeBlockInString,
    "helpUrl": ""
};

export const codeBlockInString = function(block) {
    let text_stringtofind = block.getFieldValue('stringToFind');
    let value_targetstring = Blockly.Lua.valueToCode(block, 'targetString', Blockly.Lua.ORDER_ATOMIC);
    let code = `InStr(${value_targetstring},"${text_stringtofind}")`;
    return [code, null];
};