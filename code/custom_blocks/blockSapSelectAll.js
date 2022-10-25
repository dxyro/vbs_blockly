Blockly.defineBlocksWithJsonArray([
    {
        "type": "blockSapSelectAll",
        "message0": "write special %1 element id: %2 name: %3 break: %4",
        "args0": [
            {
                "type": "input_dummy"
            },
            {
                "type": "field_input",
                "name": "elementId",
                "text": "elementId"
            },
            {
                "type": "field_input",
                "name": "simbolicName",
                "text": "simbolicName"
            },
            {
                "type": "field_checkbox",
                "name": "runBreak",
                "checked": true
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 230,
        "tooltip": "",
        "helpUrl": ""
    }
]);

Blockly.Lua['blockSapSelectAll'] = function(block) {
    let text_elementid = block.getFieldValue('elementId');
    let text_simbolicname = block.getFieldValue('simbolicName');
    let checkbox_runbreak = block.getFieldValue('runBreak') === 'TRUE';
    let true_false;
    if (checkbox_runbreak){
        true_false = 'True'
    }else{
        true_false = 'False'
    }

    let code = `sapSelectAll "${text_elementid}", "${text_simbolicname}", ${true_false}
    `;
    return code;
};