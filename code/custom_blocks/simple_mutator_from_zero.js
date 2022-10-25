Blockly.defineBlocksWithJsonArray([
    {
        "type": "simple",
        "message0": "simple cambio %1",
        "args0": [
            {
                "type": "field_dropdown",
                "name": "quita_pon",
                "options": [
                    ["quita", "Q" ],
                    ["pon", "P"]
                ]
            }
        ],
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "colour": 230,
        "tooltip": "Añade o quita un campo numerico",
        "helpUrl": "",
        "mutator": "simple_mutator"
    }
]);

// con este mixin definimos el comportamiento del cambio cambio
const SIMPLE_MUTATOR_MIXIN = {
    mutationToDom: function() {
        const contenedor = Blockly.utils.xml.createElement('mutador');
        const nuevaEntrada = (this.getFieldValue('quita_pon') === 'P');
        contenedor.setAttribute('nuevaEntrada', nuevaEntrada);
        return contenedor;
    },
    domToMutation: function (xmlElement) {
        const nuevaEntrada = (xmlElement.getAttribute('nuevaEntrada') === 'true');
        this.updateShape(nuevaEntrada);
    },
    updateShape: function (nuevaEntrada) {
        const entradaExiste = this.getInput('NUEVO_CAMPO');
        if (nuevaEntrada) {
            if (!entradaExiste) {
                this.appendValueInput('NUEVO_CAMPO').setCheck('Number');
            }
        } else if (entradaExiste) {
            this.removeInput('NUEVO_CAMPO');
        }
    }
}

// con esta extension evaluamos el evento para el cambio
const SIMPLE_MUTATOR_EXTENSION = function() {
    this.getField('quita_pon').setValidator(
        function(opcion) {
            const nuevaEntrada = (opcion === 'P');
            this.getSourceBlock().updateShape(nuevaEntrada);
        }
    );
}

Blockly.Extensions.registerMutator(
    'simple_mutator', SIMPLE_MUTATOR_MIXIN, SIMPLE_MUTATOR_EXTENSION
);

Blockly.Lua['simple'] = function(block) {
    let dropdown_quita_pon = block.getFieldValue('quita_pon');
    let value_nuevaentrada = Blockly.Lua.valueToCode(block, 'NUEVO_CAMPO', Blockly.Lua.ORDER_ATOMIC);
    // TODO: Assemble Lua into code variable.
    let code = value_nuevaentrada;
    // TODO: Change ORDER_NONE to the correct strength.
    return code;
};