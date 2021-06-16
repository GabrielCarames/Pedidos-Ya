const express = require('express');
const cors = require('cors')
const app = express();

//setting
//Si se sube la aplicacion a una nube, estos te dan un puerto aleatorio a partir de una variable de entorno
//Entonces si existe esa variable con ese puerto, la usa, sino usa la de 3000
app.set('port', process.env.PORT || 3000)

//middlewares
//son funcioens que se ejecutan antes de llegar a las rutas
app.use(cors()) // cors se encarga de que el sv de backend y sv de front end se comuniquen sin problemas, como por errores de seguridad, protocolos, etc.
app.use(express.json()) // esto hace que el sv pueda entender datos de JSON y STRINGS

//routes
app.use('/users', require('./routes/users'))

module.exports = app;