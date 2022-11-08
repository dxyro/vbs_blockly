import { typeBlockDeclareVariable, definitionBlockDeclareVariable, codeBlockDeclareVariable } from './blockDeclareVariable.js';
import { typeBlockGetVariable, definitionBlockGetVariable, codeBlockGetVariable } from './blockGetVariable.js';
import { typeBlockSapElement, definitionBlockSapElement, codeBlockSapElement } from './blockSapElement.js';
import { typeBlockSapParameter, definitionBlockSapParameter, codeBlockSapParameter } from './blockSapParameter.js';
import { typeBlockSetVariable, definitionBlockSetVariable, codeBlockSetVariable } from './blockSetVariable.js';
import { typeBlockValue, definitionBlockValue, codeBlockValue } from './blockValue.js';

Blockly.defineBlocksWithJsonArray([
    definitionBlockDeclareVariable,
    definitionBlockGetVariable,
    definitionBlockSapElement,
    definitionBlockSapParameter,
    definitionBlockSetVariable,
    definitionBlockValue
]);

Blockly.Lua[typeBlockDeclareVariable] = codeBlockDeclareVariable;
Blockly.Lua[typeBlockGetVariable] = codeBlockGetVariable;
Blockly.Lua[typeBlockSapElement] = codeBlockSapElement;
Blockly.Lua[typeBlockSapParameter] = codeBlockSapParameter;
Blockly.Lua[typeBlockSetVariable] = codeBlockSetVariable;
Blockly.Lua[typeBlockValue] = codeBlockValue;