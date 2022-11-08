Blockly.defineBlocksWithJsonArray([
    {
        'type': 'complex',
        'message0': 'evaluate %1',
        'args0': [
            {
                'type': 'input_value',
                'name': 'INICIO0',
                'check': 'Boolean'
            },
        ],
        'message1':'do %1',
        'args1': [
            {
                'type': 'input_statement',
                'name': 'REALIZAR0'
            }
        ],
        'previousStatement': null,
        'nextStatement': null,
        'colour': 230,
        'helpUrl': '',
        'suppressPrefixSuffix': true,
        'mutator': 'complex_mutator',
        'extensions': ['complex_mutator_tooltip'],
    },
    {
        'type': 'bloqueInicio',
        'message0': 'init',
        'nextStatement': null,
        'enableContextMenu': false,
        'tooltip': ''
    },
    {
        'type': 'bloqueMedio',
        'message0': 'function',
        'previousStatement': null,
        'nextStatement': null,
        'enableContextMenu': false,
        'tooltip': ''
    },
    {
        'type': 'bloqueFin',
        'message0': 'end',
        'previousStatement': null,
        'enableContextMenu': false,
        'tooltip': ''
    }
]);

const COMPLEX_MUTATOR_MIXIN = {
    conteoBloqueMedio: 0,
    conteoBloqueFin: 0,

    mutationToDom: function() {
        if (!this.conteoBloqueMedio && !this.conteoBloqueFin) {
            return null;
        }
        const contenedor = Blockly.utils.xml.createElement('mutation');
        if (this.conteoBloqueMedio) {
            contenedor.setAttribute('bloqueMedio', this.conteoBloqueMedio);
        }
        if (this.conteoBloqueFin) {
            contenedor.setAttribute('bloqueFin', 1);
        }

        return contenedor;
    },

    domToMutation: function(xmlElement) {
        this.conteoBloqueMedio = parseInt(xmlElement.getAttribute('bloqueMedio'), 10) || 0;
        this.conteoBloqueFin = parseInt(xmlElement.getAttribute('bloqueFin'), 10) || 0;
        this.rebuildShape();
    },

    saveExtraState: function() {
        if (!this.conteoBloqueMedio && !this.conteoBloqueFin) {
            return null;
        }
        const state = Object.create(null);
        if (this.conteoBloqueMedio) {
            state['conteoBloqueMedio'] = this.conteoBloqueMedio;
        }
        if (this.conteoBloqueFin) {
            state['tieneFin'] = true;
        }
        return state;
    },

    loadExtraState: function(state) {
        this.conteoBloqueMedio = state['conteoBloqueMedio'] || 0;
        this.conteoBloqueFin =  state['tieneFin'] ? 1 : 0;
        this.updateShape();
    },

    decompose: function(workspace) {
        const contenedorBloque = workspace.newBlock('bloqueInicio');
        contenedorBloque.initSvg();
        let conexion = contenedorBloque.nextConnection;
        for (let i = 1; i <= this.conteoBloqueMedio; i++) {
            const bloqueMedio = workspace.newBlock('bloqueMedio');
            bloqueMedio.initSvg();
            conexion.connect(bloqueMedio.previousConnection);
            conexion = bloqueMedio.nextConnection;
        }
        if (this.conteoBloqueFin) {
            const bloqueFin = workspace.newBlock('bloqueFin');
            bloqueFin.initSvg();
            conexion.connect(bloqueFin.previousConnection);
        }
        return contenedorBloque;
    },

    compose: function(containerBlock) {
        let bloqueClausula = containerBlock.nextConnection.targetBlock();
        // conteo del numero de entradas
        this.conteoBloqueMedio = 0;
        this.conteoBloqueFin = 0;
        const conexionesValor = [null];
        const conexionesSentencia = [null];
        let conexionSentenciaFin = null;
        while (bloqueClausula) {
            if (bloqueClausula.isInsertionMarker()) {
                bloqueClausula = bloqueClausula.getNextBlock();
                continue;
            }
            switch (bloqueClausula.type) {
                case 'bloqueMedio':
                    this.conteoBloqueMedio++;
                    conexionesValor.push(bloqueClausula.valueConnection_);
                    conexionesSentencia.push(bloqueClausula.statementConnection_);
                    break;
                case 'bloqueFin':
                    this.conteoBloqueFin++;
                    conexionSentenciaFin = bloqueClausula.statementConnection_;
                    break;
                default:
                    throw TypeError('Tipo de Bloque Desconocido: ' + bloqueClausula.type);
            }
            bloqueClausula = bloqueClausula.getNextBlock();
        }
        this.updateShape();
        // reconectar cada bloque hijo
        this.reconnectChildBlocks(conexionesValor, conexionesSentencia, conexionSentenciaFin);
    },

    saveConnections: function(containerBlock) {
      let bloqueClausula = containerBlock.nextConnection.targetBlock();
      let i = 1;
      while (bloqueClausula) {
          if (bloqueClausula.isInsertionMarker()) {
              bloqueClausula = bloqueClausula.getNextBlock();
              continue;
          }
          switch (bloqueClausula.type) {
              case 'bloqueMedio': {
                  const entradaInicio = this.getInput('INICIO' + i);
                  const entradaRealizar = this.getInput('REALIZAR' + i);
                  bloqueClausula.valueConnection_ = entradaInicio && entradaInicio.connection.targetConnection;
                  bloqueClausula.statementConnection_ = entradaRealizar && entradaRealizar.connection.targetConnection;
                  i++;
                  break;
              }
              case 'bloqueFin': {
                  const entradaRealizar = this.getInput('FIN');
                  bloqueClausula.statementConnection_ = entradaRealizar && entradaRealizar.connection.targetConnection;
                  break;
              }
              default:
                  throw TypeError('Tipo de Bloque Desconocido: ' + bloqueClausula.type);
          }
          bloqueClausula = bloqueClausula.getNextBlock();
      }
    },

    rebuildShape: function() {
        const conexionesValor = [null];
        const conexionesSentencia = [null];
        let conexionSentenciaFin = null;

        if (this.getInput('FIN')) {
            conexionSentenciaFin = this.getInput('FIN').connection.targetConnection;
        }
        for (let i = 1; this.getInput('INICIO' + i); i++) {
            const entradaInicio = this.getInput('INICIO' + i);
            const entradaRealizar = this.getInput('REALIZAR' + i);
            conexionesValor.push(entradaInicio.connection.targetConnection);
            conexionesSentencia.push(entradaRealizar.connection.targetConnection);
        }
        this.updateShape();
        this.reconnectChildBlocks(conexionesValor, conexionesSentencia, conexionSentenciaFin);
    },

    updateShape: function() {
        // Borrar lo que hay
        if (this.getInput('FIN')) {
            this.removeInput('FIN');
        }
        for (let i = 1; this.getInput('INICIO' + i); i++) {
            this.removeInput('INICIO' + i);
            this.removeInput('REALIZAR' + i);
        }
        // reconstruir bloque
        for (let i = 1; i <= this.conteoBloqueMedio; i++) {
            this.appendValueInput('INICIO' + i).setCheck('Boolean').appendField(
                // convertir en variable
                'also'
            );
            this.appendStatementInput('REALIZAR' + i).appendField(
                // convertir en variable
                'do'
            );
        }
        if (this.conteoBloqueFin) {
            this.appendStatementInput('FIN').appendField(
                // convertir en variable
                'finally'
            );
        }
    },

    reconnectChildBlocks: function(conexionesValor, conexionesSentencia, conexionSentenciaFin) {
        for (let i = 1; i <= this.conteoBloqueMedio; i++) {
            Blockly.Mutator.reconnect(conexionesValor[i], this, 'INICIO' + i);
            Blockly.Mutator.reconnect(conexionesSentencia[i], this, 'REALIZAR' + i);
        }
        Blockly.Mutator.reconnect(conexionSentenciaFin, this, 'FIN');
    },
};

Blockly.Extensions.registerMutator(
    'complex_mutator', COMPLEX_MUTATOR_MIXIN, null, ['bloqueMedio', 'bloqueFin']
);

const COMPLEX_MUTATOR_TOOLTIP_EXTENSION = function() {
    this.setTooltip(function() {
        if (!this.conteoBloqueMedio && !this.conteoBloqueFin) {
            // convertir a variable
            return 'If a value is true, then do some statements.';
        } else if (!this.conteoBloqueMedio && this.conteoBloqueFin) {
            // convertir a variable
            return 'If a value is true, then do the first block of statements. Otherwise, do the second block of statements.';
        } else if (this.conteoBloqueMedio && !this.conteoBloqueFin) {
            return 'If the first value is true, then do the first block of statements. Otherwise, if the second value is true, do the second block of statements.';
        } else if (this.conteoBloqueMedio && this.conteoBloqueFin) {
            return 'If the first value is true, then do the first block of statements. Otherwise, if the second value is true, do the second block of statements. If none of the values are true, do the last block of statements.'
        }
        return '';
    }.bind(this));
};

Blockly.Extensions.register('complex_mutator_tooltip', COMPLEX_MUTATOR_TOOLTIP_EXTENSION);

Blockly.Lua['complex'] = function(block) {
    let value_inicial = Blockly.Lua.valueToCode(block, 'INICIO0', Blockly.Lua.ORDER_ATOMIC);
    let statements_realiza = Blockly.Lua.statementToCode(block, 'REALIZAR0');
    // TODO: Assemble Lua into code variable.
    let code = 'alguna cosa';
    return code;
};

Blockly.Lua['bloqueMedio'] = function(block) {
    let value_inicial = Blockly.Lua.valueToCode(block, 'INICIO0', Blockly.Lua.ORDER_ATOMIC);
    let statements_realiza = Blockly.Lua.statementToCode(block, 'REALIZAR0');
    // TODO: Assemble Lua into code variable.
    let code = 'alguna cosa';
    return code;
};