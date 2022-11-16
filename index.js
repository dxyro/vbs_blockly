const express = require("express");

let path = require("path");

const port = process.env.PORT || 8090;

const app = express();
app.use(express.static('./code/'));
app.use(express.static('./appengine/'));
app.use(express.static('./msg/'));

const nm_dependences = ['blockly'];
nm_dependences.forEach(dep => {
    app.use(`/${dep}`, express.static(path.resolve(`node_modules/${dep}`)));
});

app.listen(port, () =>{
    console.log(`Sercer running in port: ${port}`);
});