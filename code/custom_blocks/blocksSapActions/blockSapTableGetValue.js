export const typeBlockSapTableGetValue = "blockSapTableGetValue"

export const definitionBlockSapTableGetValue = {
    "type": typeBlockSapTableGetValue,
    "message0": "get table value %1 table id: %2 line: %3 colunm name: %4 alternative %5 break: %6",
    "args0": [
    {
        "type": "input_dummy"
    },
    {
        "type": "input_value",
        "name": "tableId"
    },
    {
        "type": "input_value",
        "name": "line"
    },
    {
        "type": "input_value",
        "name": "column"
    },
    {
        "type": "field_checkbox",
        "name": "tryAlter",
        "checked": true
    },
    {
        "type": "field_checkbox",
        "name": "break",
        "checked": true
    }
],
    "inputsInline": false,
    "output": null,
    "colour": 120,
    "tooltip": typeBlockSapTableGetValue,
    "helpUrl": ""
};

export const codeBlockSapTableGetValue = function(block) {
    let value_tableid = Blockly.Lua.valueToCode(block, 'tableId', Blockly.Lua.ORDER_ATOMIC);
    let value_line = Blockly.Lua.valueToCode(block, 'line', Blockly.Lua.ORDER_ATOMIC);
    let value_column = Blockly.Lua.valueToCode(block, 'column', Blockly.Lua.ORDER_ATOMIC);
    let checkbox_tryalter = block.getFieldValue('tryAlter') === 'TRUE';
    let checkbox_break = block.getFieldValue('break') === 'TRUE';
    let tryAlter;
    let runBreak;
    if (checkbox_tryalter){
        tryAlter = 'True'
    }else{
        tryAlter = 'False'
    }
    if (checkbox_break){
        runBreak = 'True'
    }else{
        runBreak = 'False'
    }
    let code = `sapTableGetVAlue(${value_tableid}, ${value_line}, ${value_column}, ${tryAlter}, ${runBreak})`;
    return [code, null];
};