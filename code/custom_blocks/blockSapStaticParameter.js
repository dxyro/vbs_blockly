Blockly.defineBlocksWithJsonArray([
    {
        "type": "blockSapStaticParameter",
        "message0": "Sap parameter %1 name: %2  type: %3 value: %4",
        "args0": [
            {
                "type": "input_dummy"
            },
            {
                "type": "field_input",
                "name": "parameterName",
                "text": "parameterName"
            },
            {
                "type": "field_dropdown",
                "name": "parameterType",
                "options": [["Number", "N"], ["String", "S"], ["Boolean","B"]]
            },
            {
                "type": "field_input",
                "name": "parameterValue",
                "text": "parameterValue"
            }
        ],
        "previousStatement": [
            "blockSubProcesure",
            "blockSapStaticParameter"
        ],
        "nextStatement": "blockSapStaticParameter",
        "colour": 230,
        "tooltip": "",
        "helpUrl": ""
    }
]);

// TODO: valid type parameters

Blockly.Lua['blockSapStaticParameter'] = function(block) {
    let text_parametername = block.getFieldValue('parameterName');
    let text_parametervalue = block.getFieldValue('parameterValue');
    let dropdown_parametertype = block.getFieldValue('parameterType');
    let code;
    if (dropdown_parametertype=='N' || dropdown_parametertype =='B'){
        code = `objEnv("${text_parametername}") = ${text_parametervalue}
        `;
    }else{
        code = `objEnv("${text_parametername}") = "${text_parametervalue}"
        `;
    }
    return code;
};