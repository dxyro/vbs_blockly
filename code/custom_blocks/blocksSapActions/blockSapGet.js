export const typeBlockSapGet = "blockSapGet";

export const definitionBlockSapGet = {
    "type": typeBlockSapGet,
    "message0": "get %1 element id: %2 name: %3 break: %4",
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
            "type": "field_checkbox",
            "name": "runBreak",
            "checked": true
        }
    ],
    "inputsInline": false,
    "output": null,
    "colour": 120,
    "tooltip": typeBlockSapGet,
    "helpUrl": "",
};

export const codeBlockSapGet = function(block) {
    //let text_elementid = block.getFieldValue('elementId');
    let text_elementid = Blockly.Lua.valueToCode(block, 'elementId', Blockly.Lua.ORDER_ATOMIC);
    //let text_simbolicname = block.getFieldValue('simbolicName');
    let text_simbolicname = Blockly.Lua.valueToCode(block, 'simbolicName', Blockly.Lua.ORDER_ATOMIC);
    let checkbox_runbreak = block.getFieldValue('runBreak') === 'TRUE';
    let true_false;
    if (checkbox_runbreak){
        true_false = 'True'
    }else{
        true_false = 'False'
    }

    let code = `
    sapGet "${text_elementid}", "${text_simbolicname}", ${true_false}
    \n`;
    return [code, null];
};