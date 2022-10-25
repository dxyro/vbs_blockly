Blockly.defineBlocksWithJsonArray([
    {
        "type": "mouse",
        "message0": "Mouse",
        "previousStatement": "rat",
        "nextStatement": "mouse"
    },
    {
        "type": "rat",
        "message0": "Rat",
        "previousStatement": "rat",
        "nextStatement": "rat"
    },
    {
        "type": "dog",
        "message0": "Dog",
        "previousStatement": "dog",
        "nextStatement": "dog"
    },

    {
        "type": "rodent_list",
        "message0": "Rodents %1",
        "args0": [
            {
                "type": "input_statement",
                "name": "RODENTS",
                "check": ["mouse", "rat"]
            }
        ]
    }
]);