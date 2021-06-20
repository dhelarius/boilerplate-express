var express = require('express');
var app = express();

// TODO 4: Agregar middleware express.static()
app.use('/public', express.static(__dirname + '/public'));

// TODO 1: Imprimir Hello World en consola
console.log('Hello World');

// TODO 2: Imprimir Hello Express en la aplicación
/* app.get('/', (req, res) => {
    res.send('Hello Express');
}) */

// TODO 3: Mostrar un archivo HTML en la aplicación
const path = __dirname + '/views/index.html';

/* app.get('/', (req, res) => {
    res.sendFile(path);
}); */

// TODO 5: Enviar un una solictud json
app.get('/json', (req, res) => {
    res.json({"message": "Hello json"});
})

 module.exports = app;
