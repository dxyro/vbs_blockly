import {camelize, cleanPublic } from '../commons/allCommons.js'

export const typeBlockClass = "blockClass";

export const definitionBlockClass = {
    "type": typeBlockClass,
    "message0": "Begin %1 name: %2 environment: %3 %4 elements: %5 parameters: %6 logic: %7",
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
            "name": "elements",
            "check": "blockSapElement"
        },
        {
            "type": "input_statement",
            "name": "parameters",
            "check": "blockSapParameter"
        },
        {
            "type": "input_statement",
            "name": "actions",
            "check": "blockClass"
        }
    ],
    "colour": 230,
    "tooltip": typeBlockClass,
    "helpUrl": "./blocks_documentation/blocksOperations/blockClassHelp.html",
    "extensions": ["extWarningOnClassChange"]
};

export const codeBlockClass = function(block) {
    let text_classname = block.getFieldValue('className');
    let text_camelize_classname = camelize(block.getFieldValue('className'));
    let dropdown_environment = block.getFieldValue('environment');
    let statements_elements = Blockly.Lua.statementToCode(block, 'elements');
    let statements_parameters = Blockly.Lua.statementToCode(block, 'parameters');
    let statements_actions = Blockly.Lua.statementToCode(block, 'actions')
    // let read_elements = cleanPublic(statements_elements)
    // console.log(read_elements);
    let read_elements = ``;
    if(statements_elements){
        cleanPublic(statements_elements).forEach(element =>
        read_elements += `
        ${element} =  readVar("${element}")
        `)
    }

    let code = `
    Option Explicit
    include "scriptsupport.VBS"
    
    Class ${text_camelize_classname}
    
      Private objBaseScript
      ${statements_elements}
      Public Sub setParamsObjEnv()
      ${statements_parameters}
      End Sub
      
      Public Sub run(local)
        Set objBaseScript = (New BaseScript)()
        objBaseScript.setNameScript = "${text_classname}"
        
        If local Then
          objBaseScript.readParametersForLogin objBaseScript.getIsObjEnv()
          setParamsObjEnv
        End If
        
        read_params
        
        If loginSAP Then content
        
        objBaseScript.successfulScript
        
        objBaseScript.endScript
        
      End Sub
      
      Private Function read_params()
        ${read_elements}
      End Function
      
      ${statements_actions}
    End Class
    
    Public Function include(filename)
      Dim fso, currentDirectory ,f,s
      Set fso = CreateObject("Scripting.FileSystemObject")
        
      currentDirectory = Left(WScript.ScriptFullName,(Len(WScript.ScriptFullName))-(Len(WScript.ScriptFullName)))
        
      Set f = fso.OpenTextFile(currentDirectory & "\" & filename,1)
      s = f.ReadAll()
      ExecuteGlobal s
      s = ""
      f.close
        
      Set f = Nothing
      Set fso = Nothing
    End Function
    
    Dim objScript
    Set objScript = New ${text_camelize_classname}
    
    objScript.run ${dropdown_environment}
    `;
    return code;
};