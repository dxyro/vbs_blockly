export const extDynamicSapElementDropDown = "extDynamicSapElementDropDown";

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
