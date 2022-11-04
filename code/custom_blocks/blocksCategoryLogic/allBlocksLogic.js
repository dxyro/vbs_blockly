import { typeBlockIf, definitionBlockIf, codeBlockIf } from './blockIf.js'
import { typeBlockIfElse, definitionBlockIfElse, codeBlockIfElse } from './blockIfElse.js'
import { typeBlockWhile, definitionBlockWhile, codeBlockWhile } from './blockWhile.js'

Blockly.defineBlocksWithJsonArray([
    definitionBlockIf,
    definitionBlockIfElse,
    definitionBlockWhile
]);

Blockly.Lua[typeBlockIf] = codeBlockIf;
Blockly.Lua[typeBlockIfElse] = codeBlockIfElse;
Blockly.Lua[typeBlockWhile] = codeBlockWhile;