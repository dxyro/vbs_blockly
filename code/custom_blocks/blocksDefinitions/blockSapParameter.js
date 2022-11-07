export const typeBlockSapParameter = "blockSapParameter";

export const definitionBlockSapParameter =   {
    "type": typeBlockSapParameter,
    "message0": "Parameter %1 name: %2  type: %3 value: %4",
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
        "blockClass",
        "blockSapParameter"
    ],
    "nextStatement": "blockSapParameter",
    "colour": 330,
    "tooltip": typeBlockSapParameter,
    "helpUrl": ""
};

export const codeBlockSapParameter = function(block) {
    let text_parametername = block.getFieldValue('parameterName');
    let text_parametervalue = block.getFieldValue('parameterValue');
    let dropdown_parametertype = block.getFieldValue('parameterType');
    let code;
    if (dropdown_parametertype=='N' || dropdown_parametertype =='B'){
        code = `
    \tobjEnv("${text_parametername}") = ${text_parametervalue}
    `;
    }else{
        code = `
    \tobjEnv("${text_parametername}") = "${text_parametervalue}"
    `;
    }
    return code;
};