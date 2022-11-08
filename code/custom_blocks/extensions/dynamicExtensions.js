export const extDynamicSapElementDropDown = "extDynamicSapElementDropDown";
export const extDynamicFunctionDropDown = "extDynamicFunctionDropDown";
export const extDynamicVariableDropDown = "extDynamicVariableDropDown";

export const funcDynamicSapElementDropDown = function () {
    let entorno = this.workspace;
    this.getInput('sapElement')
        .appendField(new Blockly.FieldDropdown(
            function () {
                let options = [];
                options.push(['------', '']);
                if (entorno) {
                    entorno.blockDB.forEach((element) => {
                        if (element.type === 'blockSapElement') {
                            options.push([element.getFieldValue('elementName'), element.getFieldValue('elementName')]);
                        }
                    });
                }
                return options
            }
        ), 'elementChoosen');
};

export const funcDynamicFunctionDropDown = function () {
    let entorno = this.workspace;
    this.getInput('pFunction')
        .appendField(new Blockly.FieldDropdown(
            function () {
                let options = [];
                options.push(['------', '']);
                if (entorno) {
                    entorno.blockDB.forEach((element) => {
                        if (element.type === 'blockFunction') {
                            options.push([element.getFieldValue('functionName'), element.getFieldValue('functionName')]);
                        }
                    });
                }
                return options
            }
        ), 'functionChoosen');
};

export const funcDynamicVariableDropDown = function () {
    let entorno = this.workspace;
    this.getInput('dynamicName')
        .appendField(new Blockly.FieldDropdown(
            function () {
                let options = [];
                options.push(['------', '']);
                if (entorno) {
                    entorno.blockDB.forEach((element) => {
                        if (element.type === 'blockDeclareVariable') {
                            options.push([element.getFieldValue('variableName'), element.getFieldValue('variableName')]);
                        }
                    });
                }
                return options
            }
        ), 'variableChoosen');
};