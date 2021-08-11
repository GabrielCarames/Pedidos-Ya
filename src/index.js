//Antes de que comience todo, se llama y configura la variable de entorno
//declarada en su correspondiente archivo.
//las varaibles de entorno sirven para proteger datos y no hacerlos visibles al publico
//estas variables se guardan en la pc
require('dotenv').config();
const path = require('path');
const app = require('./app')
const express = require('express');

require('./database')

async function main() {
    await app.listen(app.get('port'))
    console.log('Server on port', app.get('port'))
}

main();

if(process.env.NODE_ENV === 'production') {
    console.log("sotpyyeye")
    app.use(express.static('frontend/build'))
}
