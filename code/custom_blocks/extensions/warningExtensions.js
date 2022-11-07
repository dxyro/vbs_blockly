export const extWarningOnClassChange = "extWarningOnClassChange";
export const extWarningOnFunctionContentChange = "extWarningOnFunctionContentChange";
export const extWarningOnWhileChange = "extWarningOnWhileChange";

export const funcWarningOnClassChange =  function() {
    this.setOnChange(function(changeEvent) {
        if (this.getInput('actions').connection.targetBlock()) {
            this.setWarningText(null);
        } else {
            this.setWarningText('Must have a main logic block inside in logic booth.');
        }
    });
};

export const funcWarningOnFunctionContentChange = function() {
    // Example validation upon block change:
    this.setOnChange(function(changeEvent) {
        if (this.getInput('operations').connection.targetBlock()) {
            this.setWarningText(null);
        } else {
            this.setWarningText('Must have at least a block inside.');
        }
    });
};

export const funcWarningOnWhileChange =  function() {
    // Example validation upon block change:
    this.setOnChange(function(changeEvent) {
        if (this.getInput('condition').connection.targetBlock()) {
            this.setWarningText(null);
        } else {
            this.setWarningText('Must have an input block.');
        }
    });
};