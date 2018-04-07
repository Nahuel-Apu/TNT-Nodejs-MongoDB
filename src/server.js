//Aplicacion Server que utiliza Node.
const express = require('express');
const bodyparser = require('body-parser');

const app = express();

const router = require('./routes');

const conexion = require('./bdcon');

app.use(bodyparser.json());

app.use(router);

app.listen(8080, () => {
    console.log('Server running on port 8080');
})