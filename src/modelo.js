//Programa encargado de realizar un schema para guardar en la BD Mongo.
const mongoose = require('mongoose');

var schema = mongoose.Schema({
    name: {type: String}
})

var model = mongoose.model('Names' ,schema);

module.exports = model;