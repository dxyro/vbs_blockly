import { typeBlockSapAguarda, definitionBlockSapAguarda, codeBlockSapAguarda } from './blockSapAguarda.js';
import { typeBlockSapAlerts, definitionBlockSapAlerts, codeBlockSapAlerts } from './blockSapAlerts.js';
import { typeBlockSapEnter, definitionBlockSapEnter, codeBlockSapEnter } from './blockSapEnter.js';
import { typeBlockSapGo, definitionBlockSapGo, codeBlockSapGo } from './blockSapGo.js';
import { typeBlockSapLogger, definitionBlockSapLogger, codeBlockSapLogger } from './blockSapLogger.js';
import { typeBlockSapSave, definitionBlockSapSave, codeBlockSapSave } from './blockSapSave.js';
import { typeBlockSapSelectAll, definitionBlockSapSelectAll, codeBlockSapSelectAll } from './blockSapSelectAll.js';
import { typeBlockSapSet, definitionBlockSapSet, codeBlockSapSet } from './blockSapSet.js';
import { typeBlockSapTableGetValue, definitionBlockSapTableGetValue, codeBlockSapTableGetValue } from './blockSapTableGetValue.js';

Blockly.defineBlocksWithJsonArray([
    definitionBlockSapAguarda,
    definitionBlockSapAlerts,
    definitionBlockSapEnter,
    definitionBlockSapGo,
    definitionBlockSapLogger,
    definitionBlockSapSave,
    definitionBlockSapSelectAll,
    definitionBlockSapSet,
    definitionBlockSapTableGetValue
]);

Blockly.Lua[typeBlockSapAguarda] = codeBlockSapAguarda;
Blockly.Lua[typeBlockSapAlerts] = codeBlockSapAlerts;
Blockly.Lua[typeBlockSapEnter] = codeBlockSapEnter;
Blockly.Lua[typeBlockSapGo] = codeBlockSapGo;
Blockly.Lua[typeBlockSapLogger] = codeBlockSapLogger;
Blockly.Lua[typeBlockSapSave] = codeBlockSapSave;
Blockly.Lua[typeBlockSapSelectAll] = codeBlockSapSelectAll;
Blockly.Lua[typeBlockSapSet] = codeBlockSapSet;
Blockly.Lua[typeBlockSapTableGetValue] = codeBlockSapTableGetValue;