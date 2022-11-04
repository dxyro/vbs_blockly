import { typeBlockInString, definitionBlockInString, codeBlockInString } from './blockInString.js';
import { typeBlockLowerCase, definitionBlockLowerCase, codeBlockLowerCase } from './blockLowerCase.js';

Blockly.defineBlocksWithJsonArray([
    definitionBlockInString,
    definitionBlockLowerCase
]);

Blockly.Lua[typeBlockInString] = codeBlockInString;
Blockly.Lua[typeBlockLowerCase] = codeBlockLowerCase;