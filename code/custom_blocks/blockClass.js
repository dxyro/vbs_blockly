Blockly.defineBlocksWithJsonArray([
    {
        "type": "blockClass",
        "message0": "Begin %1 name: %2 environment: %3 %4 logic %5",
        "args0": [
            {
                "type": "input_dummy"
            },
            {
                "type": "field_input",
                "name": "className",
                "text": "className"
            },
            {
                "type": "field_dropdown",
                "name": "environment",
                "options": [["local", "True"], ["production", "False"]]
            },
            {
                "type": "input_dummy"
            },
            {
                "type": "input_statement",
                "name": "blocks"
            }
        ],
        "colour": 230,
        "tooltip": "rigth click for help",
        "helpUrl": "./custom_blocks/blockClassHelp.html"
    }
]);

Blockly.Lua['blockClass'] = function(block) {
    let text_classname = block.getFieldValue('className');
    let dropdown_environment = block.getFieldValue('environment');
    let statements_blocks = Blockly.Lua.statementToCode(block, 'blocks');

    // TODO: accept space separated strings and place appropriate format
    // TODO: define the appropriate receive and return types

    let code = `
    Class ${text_classname}
      Private objBaseScript
    ${statements_blocks}
    End Class
    
    Public Function include(filename)
      Dim fso, currentDirectory ,f,s
      Set fso = CreateObject("Scripting.FileSystemObject")
        
      currentDirectory = Left(WScript.ScriptFullName,(Len(WScript.ScriptFullName))-(Len(WScript.ScriptFullName))
        
      Set f = fso.OpenTextFile(currentDirectory & "\" & filename,1)
      s = f.ReadAll()
      ExecuteGlobal s
      s = ""
      f.close
        
      Set f = Nothing
      Set fso = Nothing
    End Function
    
    Dim objScript
    Set objScript = New ${text_classname}
    
    objScript.run ${dropdown_environment}
    `;
    return code;
};