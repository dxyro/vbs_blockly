export const typeBlockSapSave = "blockSapSave";

export const definitionBlockSapSave = {
    "type": typeBlockSapSave,
    "message0": "click save %1 break: %2",
    "args0": [
        {
            "type": "input_dummy"
        },
        {
            "type": "field_checkbox",
            "name": "runBreak",
            "checked": true
        }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 120,
    "tooltip": typeBlockSapSave,
    "helpUrl": ""
};

export const codeBlockSapSave = function(block) {
    let checkbox_runbreak = block.getFieldValue('runBreak') === 'TRUE';
    let true_false;
    if (checkbox_runbreak){
        true_false = 'True'
    }else{
        true_false = 'False'
    }
    let code = `
    sapSave ${true_false}
    `;
    return code;
};
