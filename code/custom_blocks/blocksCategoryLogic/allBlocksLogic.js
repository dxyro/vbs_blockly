import { typeBlockIf, definitionBlockIf, codeBlockIf } from './blockIf.js'
import { typeBlockIfElse, definitionBlockIfElse, codeBlockIfElse } from './blockIfElse.js'
import { typeBlockOr, definitionBlockOr, codeBlockOr } from './blockOr.js'
import { typeBlockWhile, definitionBlockWhile, codeBlockWhile } from './blockWhile.js'

Blockly.defineBlocksWithJsonArray([
    definitionBlockIf,
    definitionBlockIfElse,
    definitionBlockOr,
    definitionBlockWhile
]);

Blockly.Lua[typeBlockIf] = codeBlockIf;
Blockly.Lua[typeBlockIfElse] = codeBlockIfElse;
Blockly.Lua[typeBlockOr] = codeBlockOr;
Blockly.Lua[typeBlockWhile] = codeBlockWhile;