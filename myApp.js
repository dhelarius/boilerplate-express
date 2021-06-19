var express = require('express');
var app = express();

// TODO 1: Imprimir Hello World en consola
console.log('Hello World');

// TODO 2: Imprimir Hello Express en la aplicación
app.get('/', (req, res) => {
    res.send('Hello Express');
})

 module.exports = app;
