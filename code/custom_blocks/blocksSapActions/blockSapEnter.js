export const typeBlockSapEnter = "blockSapEnter";

export const definitionBlockSapEnter = {
    "type": typeBlockSapEnter,
    "message0": "press enter",
    "previousStatement": null,
    "nextStatement": null,
    "colour": 120,
    "tooltip": typeBlockSapEnter,
    "helpUrl": ""
};

export const codeBlockSapEnter = function(block) {
    let code = `
    sapPressEnter
    \n`;
    return code;
};