//Antes de que comience todo, se llama y configura la variable de entorno
//declarada en su correspondiente archivo.
//las varaibles de entorno sirven para proteger datos y no hacerlos visibles al publico
//estas variables se guardan en la pc
require('dotenv').config();

const app = require('./app')
require('./database')

async function main() {
    await app.listen(app.get('port'))
    console.log('Server on port 3000')
}

main();