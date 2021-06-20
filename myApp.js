var express = require('express');
var dotenv = require('dotenv').config();
var app = express();

// TODO 4: Agregar middleware express.static(), para cargar los estilos y embellecer el HTML
app.use('/public', express.static(__dirname + '/public'));

// TODO 7: Crear mi propio middleware
/*  app.use(function middleware(req, res, next) {
    const str = req.method + " " + req.path + " - " + req.ip;
    console.log(str);
    next();
}); */

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

// TODO 5: Enviar petición de una solicitud json
//app.get('/json', (req, res) => {
    // TODO 6: Crear un archivo de variables de entorno .env para configurar la aplicación 
    // ! [NO LOGRADO]
/*     let response;
    if(process.env.MESSAGE_STYLE === "uppercase") {
        response = "Hello Json".toUpperCase();
    } else {
        response = "Hello Json";
    }
    res.json({"message": response});
}); */

// TODO 8: Crear middleware con método GET
/* app.get('/now',function(req, res, next) {
    req.time = new Date().toString();
    next();
}, function(req, res) {
    res.json({time: req.time});
}); */

// TODO 9: Agregar parámetro de entrada desde el cliente con el método GET
app.get('/:word/echo', function(req, res) {
    res.json({echo: req.params.word});
});

 module.exports = app;
