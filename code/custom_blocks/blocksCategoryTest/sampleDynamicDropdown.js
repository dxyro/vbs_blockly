export const type_dynamic_dropdown = "dynamic_dropdown";

export const definition_dynamic_dropdown = {
    "type": type_dynamic_dropdown,
    "message0": "day %1",
    "args0": [
        {
            "type": "input_dummy",
            "name": "INPUT"
        }
    ],
    "colour": 150,
    "tooltip": type_dynamic_dropdown,
    "extensions": ["otra_vaina"]
};

Blockly.Extensions.register('dynamic_menu_extension',
    function() {
        this.getInput('INPUT')
            .appendField(new Blockly.FieldDropdown(
                function() {
                    var options = [];
                    var now = Date.now();
                    for(var i = 0; i < 6; i++) {
                        var dateString = String(new Date(now)).substring(0, 3);
                        options.push([dateString, dateString.toUpperCase()]);
                        now += 24 * 60 * 60 * 1000;
                    }
                    return options;
                }), 'DAY');
    });

Blockly.Extensions.register('otra_vaina',
    function() {
        let entorno = this.workspace;
        this.getInput('INPUT')
            .appendField(new Blockly.FieldDropdown(
                function(){
                    let options = [];
                    options.push(['------','']);
                    if(entorno){
                        entorno.blockDB.forEach((element) =>{
                            if(element.type==='lists_create_with'){
                                element.childBlocks_.forEach((item) =>
                                options.push([item.getFieldValue('TEXT'), item.getFieldValue('TEXT')]));
                            }
                        });
                    }
                    return options
                }
            ),'DAY');
    });

export const code_dynamic_dropdown = function(block) {
    let quien = block.getFieldValue('DAY');
    let code = `${quien}`;
    return code;
};