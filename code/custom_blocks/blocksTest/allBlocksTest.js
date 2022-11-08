import { typeBlockPendejo, definitionBlockPendejo, codeBlockPendejo} from './blockPendejo.js';
import { type_dynamic_dropdown, definition_dynamic_dropdown, code_dynamic_dropdown } from './sampleDynamicDropdown.js';

Blockly.defineBlocksWithJsonArray([
    definition_dynamic_dropdown,
    definitionBlockPendejo
]);

Blockly.Lua[typeBlockPendejo] = codeBlockPendejo
Blockly.Lua[type_dynamic_dropdown] = code_dynamic_dropdown