import {
    extWarningOnClassChange,
    extWarningOnFunctionContentChange,
    extWarningOnWhileChange,
    funcWarningOnClassChange,
    funcWarningOnFunctionContentChange,
    funcWarningOnWhileChange
} from './warningExtensions.js'

import {
    extDynamicSapElementDropDown,
    extDynamicFunctionDropDown,
    extDynamicVariableDropDown,
    funcDynamicSapElementDropDown,
    funcDynamicFunctionDropDown,
    funcDynamicVariableDropDown,
} from './dynamicExtensions.js'

Blockly.Extensions.register(extWarningOnClassChange, funcWarningOnClassChange);
Blockly.Extensions.register(extWarningOnFunctionContentChange, funcWarningOnFunctionContentChange);
Blockly.Extensions.register(extWarningOnWhileChange, funcWarningOnWhileChange);

Blockly.Extensions.register(extDynamicSapElementDropDown, funcDynamicSapElementDropDown);
Blockly.Extensions.register(extDynamicFunctionDropDown, funcDynamicFunctionDropDown);
Blockly.Extensions.register(extDynamicVariableDropDown, funcDynamicVariableDropDown);
