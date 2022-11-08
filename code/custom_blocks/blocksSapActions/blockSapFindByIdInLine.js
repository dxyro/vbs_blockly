export const typeBlockSapFindByIdInLine = "blockSapFindByIdInLine";

export const definitionBlockSapFindByIdInLine = {
    "type": typeBlockSapFindByIdInLine,
    "message0": "find by id %1 id: %2 option: %3 %4 argument %5",
    "args0": [
    {
        "type": "input_dummy"
    },
    {
        "type": "input_value",
        "name": "idTarget"
    },
    {
        "type": "field_dropdown",
        "name": "optionField",
        "options": [["none","N"], ["vertical position","VP"], ["key","K"]]
    },
    {
        "type": "input_dummy"
    },
    {
        "type": "input_value",
        "name": "argument"
    }
],
    "inputsInline": false,
    "previousStatement": null,
    "nextStatement": null,
    "colour": 120,
    "tooltip": typeBlockSapFindByIdInLine,
    "helpUrl": ""
};

export const codeBlockSapFindByIdInLine = function(block) {
    let value_idtarget = Blockly.Lua.valueToCode(block, 'idTarget', Blockly.Lua.ORDER_ATOMIC);
    let dropdown_optionfield = block.getFieldValue('optionField');
    let value_argument = Blockly.Lua.valueToCode(block, 'argument', Blockly.Lua.ORDER_ATOMIC);
    let option;
    switch (dropdown_optionfield){
        case 'VP':
            option = 'verticalScrollbar.position';
            break;
        case 'K':
            option = 'key';
            break;
        default:
            option = '';
    }
    let code = `
    session.findById(${value_idtarget}).${option} ${value_argument}
    `;
    return code;
};