//Programa que realiza la conexion con la imagen mongo.
const mongoose = require('mongoose');

var conector = mongoose.connect('mongodb://mongo/nombres');

mongoose.connection.on('connected',()=>{
    console.log('Se conecto a la BD')
})

mongoose.connection.on('error',(error)=>{
    console.log('Error a la conexion a la BD', error)
})

module.exports = conector; 