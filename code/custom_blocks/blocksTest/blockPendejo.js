export const typeBlockPendejo = "blockPendejo";

export const definitionBlockPendejo = {
    "type": typeBlockPendejo,
    "message0": "%1",
    "args0": [
        {
            "type": "field_input",
            "name": "pendejo",
            "text": "default"
        }
    ],
    "output": "String",
    "colour": 150,
    "tooltip": typeBlockPendejo,
    "helpUrl": ""
};

export const codeBlockPendejo = function(block) {
    var text_pendejo = block.getFieldValue('pendejo');
    var code = '...Peo';
    return [code, Blockly.Lua.ORDER_NONE];
};