import { typeBlockCast, definitionBlockCast, codeBlockCast } from './blockCast.js';
import { typeBlockInLineMath, definitionBlockInLineMath, codeBlockInlineMath } from './blockInlineMath.js';
import { typeBlockInString, definitionBlockInString, codeBlockInString } from './blockInString.js';
import { typeBlockInStringSpecial, definitionBlockInStringSpecial, codeBlockInStringSpecial } from './blockInStringSpecial.js';
import { typeBlockLowerCase, definitionBlockLowerCase, codeBlockLowerCase } from './blockLowerCase.js';
import { typeBlockMath, definitionBlockMath, codeBlockMath } from './blockMath.js';
import { typeBlockTrim, definitionBlockTrim, codeBlockTrim } from './blockTrim.js';
import { typeBlockSapReplace, definitionBlockSapReplace, codeBlockSapReplace } from './blockSapReplace.js';


Blockly.defineBlocksWithJsonArray([
    definitionBlockCast,
    definitionBlockInLineMath,
    definitionBlockInString,
    definitionBlockInStringSpecial,
    definitionBlockLowerCase,
    definitionBlockMath,
    definitionBlockTrim,
    definitionBlockSapReplace
]);

Blockly.Lua[typeBlockCast] = codeBlockCast;
Blockly.Lua[typeBlockInLineMath] = codeBlockInlineMath;
Blockly.Lua[typeBlockInString] = codeBlockInString;
Blockly.Lua[typeBlockInStringSpecial] = codeBlockInStringSpecial;
Blockly.Lua[typeBlockLowerCase] = codeBlockLowerCase;
Blockly.Lua[typeBlockMath] = codeBlockMath;
Blockly.Lua[typeBlockTrim] = codeBlockTrim;
Blockly.Lua[typeBlockSapReplace] = codeBlockSapReplace;
