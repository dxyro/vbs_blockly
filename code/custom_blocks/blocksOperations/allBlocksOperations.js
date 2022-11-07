import { typeBlockCallFunction, definitionBlockCallFunction, codeBlockCallFunction } from './blockCallFunction.js';
import { typeBlockClass, definitionBlockClass, codeBlockClass } from './blockClass.js';
import { typeBlockFunction, definitionBlockFunction, codeBlockFunction } from './blockFunction.js';
import { typeBlockFunctionContent, definitionBlockFunctionContent, codeBlockFunctionContent } from './blockFunctionContent.js';
import { typeBlockSubProcedure, definitionBlockSubProcedure, codeBlockSubProcedure } from './blockSubProcedure.js';

Blockly.defineBlocksWithJsonArray([
    definitionBlockCallFunction,
    definitionBlockClass,
    definitionBlockFunction,
    definitionBlockFunctionContent,
    definitionBlockSubProcedure
]);

Blockly.Lua[typeBlockCallFunction] = codeBlockCallFunction;
Blockly.Lua[typeBlockClass] = codeBlockClass;
Blockly.Lua[typeBlockFunction] = codeBlockFunction;
Blockly.Lua[typeBlockFunctionContent] = codeBlockFunctionContent;
Blockly.Lua[typeBlockSubProcedure] = codeBlockSubProcedure;