//Utiliza las distintas funciones para realizar pruebas entre NodeJS y MongoDB
const express = require('express');
const modelo = require('./modelo');

var router = express.Router();

//Prueba del servidor Node (Usado en Punto 9)
router.get('/hello', (req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });

    // print out Hello 
    res.end('Hola Punto 10\n');
})

//Muestra los nombres que se generaron en la BD.
router.get('/nombres', (req, res) => {
    modelo.find({}, (err, resp) => {
        res.send({ error: err, respuesta: resp })
    })

})

//Genera un nombre en la BD.
router.get('/crear/:nombre', (req, res) => {
    console.log(req.params.nombre)
    var nombre = new modelo({name: req.params.nombre});

    nombre.save((err) => {
        if (err)
            res.end('Error al guardar', err);
        res.end('Se creo el nombre', nombre);
    })

})

module.exports = router;