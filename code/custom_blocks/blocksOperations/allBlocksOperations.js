import { typeBlockCallFunction, definitionBlockCallFunction, codeBlockCallFunction } from './blockCallFunction.js';
import { typeBlockClass, definitionBlockClass, codeBlockClass } from './blockClass.js';
import { typeBlockFunction, definitionBlockFunction, codeBlockFunction } from './blockFunction.js';
import { typeBlockMainContent, definitionBlockMainContent, codeBlockMainContent } from './blockMainContent.js';
import { typeBlockSubProcedure, definitionBlockSubProcedure, codeBlockSubProcedure } from './blockSubProcedure.js';

Blockly.defineBlocksWithJsonArray([
    definitionBlockCallFunction,
    definitionBlockClass,
    definitionBlockFunction,
    definitionBlockMainContent,
    definitionBlockSubProcedure
]);

Blockly.Lua[typeBlockCallFunction] = codeBlockCallFunction;
Blockly.Lua[typeBlockClass] = codeBlockClass;
Blockly.Lua[typeBlockFunction] = codeBlockFunction;
Blockly.Lua[typeBlockMainContent] = codeBlockMainContent;
Blockly.Lua[typeBlockSubProcedure] = codeBlockSubProcedure;