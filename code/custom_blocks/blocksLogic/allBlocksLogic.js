import { typeBlockIf, definitionBlockIf, codeBlockIf } from './blockIf.js'
import { typeBlockIfElse, definitionBlockIfElse, codeBlockIfElse } from './blockIfElse.js'
import { typeBlockOrAnd, definitionBlockOrAnd, codeBlockOrAnd } from './blockOrAnd.js'
import { typeBlockWhile, definitionBlockWhile, codeBlockWhile } from './blockWhile.js'

Blockly.defineBlocksWithJsonArray([
    definitionBlockIf,
    definitionBlockIfElse,
    definitionBlockOrAnd,
    definitionBlockWhile
]);

Blockly.Lua[typeBlockIf] = codeBlockIf;
Blockly.Lua[typeBlockIfElse] = codeBlockIfElse;
Blockly.Lua[typeBlockOrAnd] = codeBlockOrAnd;
Blockly.Lua[typeBlockWhile] = codeBlockWhile;