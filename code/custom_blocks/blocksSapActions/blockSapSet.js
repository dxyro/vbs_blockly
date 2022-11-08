export const typeBlockSapSet = "blockSapSet";

export const definitionBlockSapSet = {
    "type": typeBlockSapSet,
    "message0": "write %1 element id: %2 name: %3 sapElement: %4 break: %5",
    "args0": [
        {
            "type": "input_dummy"
        },
        {
            "type": "input_value",
            "name": "elementId",
        },
        {
            "type": "input_value",
            "name": "simbolicName",
        },
        {
            "type": "input_dummy",
            "name": "sapElement",
        },
        {
            "type": "field_checkbox",
            "name": "runBreak",
            "checked": true
        }
    ],
    "inputsInline": false,
    "previousStatement": null,
    "nextStatement": null,
    "colour": 120,
    "tooltip": typeBlockSapSet,
    "helpUrl": "",
    "extensions": ["extDynamicSapElementDropDown"]
};

export const codeBlockSapSet = function(block) {
    //let text_elementid = block.getFieldValue('elementId');
    let text_elementid = Blockly.Lua.valueToCode(block, 'elementId', Blockly.Lua.ORDER_ATOMIC);
    //let text_simbolicname = block.getFieldValue('simbolicName');
    let text_simbolicname = Blockly.Lua.valueToCode(block, 'simbolicName', Blockly.Lua.ORDER_ATOMIC);
    let drop_elementChoosen = block.getFieldValue('elementChoosen');
    let checkbox_runbreak = block.getFieldValue('runBreak') === 'TRUE';
    let true_false;
    if (checkbox_runbreak){
        true_false = 'True'
    }else{
        true_false = 'False'
    }

    let code = `
    sapSet "${text_elementid}", "${text_simbolicname}", ${drop_elementChoosen}, ${true_false}
    \n`;
    return code;
};