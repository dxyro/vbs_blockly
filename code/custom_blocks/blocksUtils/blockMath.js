export const typeBlockMath = "blockMath";

export const definitionBlockMath = {
    "type": typeBlockMath,
    "message0": "%1 %2 %3 %4",
    "args0": [
        {
            "type": "input_value",
            "name": "firstExp"
        },
        {
            "type": "field_dropdown",
            "name": "calculus",
            "options": [["=","1"], ["+","2"], ["-","3"], ["*","4"], ["/","5"], ["&", "6"], ["<>", "7"]]
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
    "output": null,
    "colour": 70,
    "tooltip": typeBlockMath,
    "helpUrl": ""
};

export const codeBlockMath = function(block) {
    let value_firstexp = Blockly.Lua.valueToCode(block, 'firstExp', Blockly.Lua.ORDER_ATOMIC);
    let dropdown_calculus = block.getFieldValue('calculus');
    let value_secondexp = Blockly.Lua.valueToCode(block, 'secondExp', Blockly.Lua.ORDER_ATOMIC);

    let calculus = '';
    switch (dropdown_calculus){
        case "1":
            calculus = '=';
            break;
        case "2":
            calculus = '+';
            break;
        case "3":
            calculus = '-';
            break;
        case "4":
            calculus = '*';
            break;
        case "5":
            calculus = '/';
            break;
        case "6":
            calculus = '&';
            break;
        case "7":
            calculus = '<>';
            break;
    }

    let code = `${value_firstexp} ${calculus} ${value_secondexp}`;
    return [code, null];
};