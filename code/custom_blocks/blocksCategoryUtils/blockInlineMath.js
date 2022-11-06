export const typeBlockInLineMath = "blockInLineMath";

export const definitionBlockInLineMath = {
    "type": typeBlockInLineMath,
    "message0": "%1 %2 %3 %4",
    "args0": [
        {
            "type": "input_value",
            "name": "firstExp"
        },
        {
            "type": "field_dropdown",
            "name": "calculus",
            "options": [["=","E"], ["+","P"], ["-","M"], ["*","T"], ["/","D"]]
        },
        {
            "type": "input_dummy"
        },
        {
            "type": "input_value",
            "name": "secondExp"
        }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": 70,
    "tooltip": typeBlockInLineMath,
    "helpUrl": ""
};

export const codeBlockInlineMath = function(block) {
    let value_firstexp = Blockly.Lua.valueToCode(block, 'firstExp', Blockly.Lua.ORDER_ATOMIC);
    let dropdown_calculus = block.getFieldValue('calculus');
    let value_secondexp = Blockly.Lua.valueToCode(block, 'secondExp', Blockly.Lua.ORDER_ATOMIC);

    let calculus = '';
    switch (dropdown_calculus){
        case 'E':
            calculus = '=';
            break;
        case 'P':
            calculus = '+';
            break;
        case 'M':
            calculus = '-';
            break;
        case 'T':
            calculus = '*';
            break;
        case 'D':
            calculus = '/';
            break;
    }


    let code = `
    ${value_firstexp} ${calculus} ${value_secondexp}
    `;
    return code;
};