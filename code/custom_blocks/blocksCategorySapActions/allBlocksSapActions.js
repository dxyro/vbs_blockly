import { typeBlockSapAbortScript, definitionBlockSapAbortScript, codeBlockSapAbortScript } from './blockSapAbortScript.js';
import { typeBlockSapAguarda, definitionBlockSapAguarda, codeBlockSapAguarda } from './blockSapAguarda.js';
import { typeBlockSapAlerts, definitionBlockSapAlerts, codeBlockSapAlerts } from './blockSapAlerts.js';
import { typeBlockSapEnter, definitionBlockSapEnter, codeBlockSapEnter } from './blockSapEnter.js';
import { typeBlockSapFindById, definitionBlockSapFindById, codeBlockSapFindById } from './blockSapFindById.js';
import { typeBlockSapFindByIdInLine, definitionBlockSapFindByIdInLine, codeBlockSapFindByIdInLine } from './blockSapFindByIdInLine.js';
import { typeBlockSapGo, definitionBlockSapGo, codeBlockSapGo } from './blockSapGo.js';
import { typeBlockSapLogger, definitionBlockSapLogger, codeBlockSapLogger } from './blockSapLogger.js';
import { typeBlockSapSave, definitionBlockSapSave, codeBlockSapSave } from './blockSapSave.js';
import { typeBlockSapSelectAll, definitionBlockSapSelectAll, codeBlockSapSelectAll } from './blockSapSelectAll.js';
import { typeBlockSapSet, definitionBlockSapSet, codeBlockSapSet } from './blockSapSet.js';
import { typeBlockSapTableGetValue, definitionBlockSapTableGetValue, codeBlockSapTableGetValue } from './blockSapTableGetValue.js';

Blockly.defineBlocksWithJsonArray([
    definitionBlockSapAbortScript,
    definitionBlockSapAguarda,
    definitionBlockSapAlerts,
    definitionBlockSapEnter,
    definitionBlockSapFindById,
    definitionBlockSapFindByIdInLine,
    definitionBlockSapGo,
    definitionBlockSapLogger,
    definitionBlockSapSave,
    definitionBlockSapSelectAll,
    definitionBlockSapSet,
    definitionBlockSapTableGetValue
]);

Blockly.Lua[typeBlockSapAbortScript] = codeBlockSapAbortScript;
Blockly.Lua[typeBlockSapAguarda] = codeBlockSapAguarda;
Blockly.Lua[typeBlockSapAlerts] = codeBlockSapAlerts;
Blockly.Lua[typeBlockSapEnter] = codeBlockSapEnter;
Blockly.Lua[typeBlockSapFindById] = codeBlockSapFindById;
Blockly.Lua[typeBlockSapFindByIdInLine] = codeBlockSapFindByIdInLine;
Blockly.Lua[typeBlockSapGo] = codeBlockSapGo;
Blockly.Lua[typeBlockSapLogger] = codeBlockSapLogger;
Blockly.Lua[typeBlockSapSave] = codeBlockSapSave;
Blockly.Lua[typeBlockSapSelectAll] = codeBlockSapSelectAll;
Blockly.Lua[typeBlockSapSet] = codeBlockSapSet;
Blockly.Lua[typeBlockSapTableGetValue] = codeBlockSapTableGetValue;