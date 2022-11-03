import { typeBlockSapElement, definitionBlockSapElement, codeBlockSapElement } from './blockSapElement.js'
import { typeBlockSapParameter, definitionBlockSapParameter, codeBlockSapParameter } from './blockSapParameter.js'

Blockly.defineBlocksWithJsonArray([
    definitionBlockSapElement,
    definitionBlockSapParameter
]);

Blockly.Lua[typeBlockSapElement] = codeBlockSapElement;
Blockly.Lua[typeBlockSapParameter] = codeBlockSapParameter;