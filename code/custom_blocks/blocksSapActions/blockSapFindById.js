export const typeBlockSapFindById = "blockSapFindById";

export const definitionBlockSapFindById = {
    "type": typeBlockSapFindById,
    "message0": "find by id %1 id: %2 option: %3",
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
        }
    ],
    "inputsInline": false,
    "output": null,
    "colour": 120,
    "tooltip": typeBlockSapFindById,
    "helpUrl": ""
};

export const codeBlockSapFindById = function(block) {
    let value_idtarget = Blockly.Lua.valueToCode(block, 'idTarget', Blockly.Lua.ORDER_ATOMIC);
    let dropdown_optionfield = block.getFieldValue('optionField');
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
    let code = `session.findById(${value_idtarget}).${option}`;
    return [code, null];
};