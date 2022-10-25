Blockly.defineBlocksWithJsonArray([
    {
        "type": "blockSapSet",
        "message0": "write %1 element id: %2 name: %3 sapElement: %4 break: %5",
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
                "type": "field_variable",
                "name": "sapElement",
                "variable": "item"
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
        "tooltip": "blockSapSet",
        "helpUrl": ""
    }
]);

Blockly.Lua['blockSapSet'] = function(block) {
    let text_elementid = block.getFieldValue('elementId');
    let text_simbolicname = block.getFieldValue('simbolicName');
    let variable_sapelement = Blockly.Lua.nameDB_.getNameForUserVariable_(block.getFieldValue('sapElement'));
    let checkbox_runbreak = block.getFieldValue('runBreak') === 'TRUE';
    let true_false;
    if (checkbox_runbreak){
        true_false = 'True'
    }else{
        true_false = 'False'
    }

    let code = `sapSet "${text_elementid}", "${text_simbolicname}", ${variable_sapelement}, ${true_false}
    `;
    return code;
};