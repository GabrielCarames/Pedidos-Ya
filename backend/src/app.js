const cors = require('cors')
const express = require('express');
const session = require('express-session')
const passport = require('passport');
const app = express();
require('../passport/localAuthenticator');

//settings
//Si se sube la aplicacion a una nube, estos te dan un puerto aleatorio a partir de una variable de entorno
//Entonces si existe esa variable con ese puerto, la usa, sino usa la de 3000
app.set('port', process.env.PORT || 3000)

//middlewares
//son funcioens que se ejecutan antes de llegar a las rutas

// cors se encarga de que el sv de backend y sv de front end se comuniquen sin problemas, como por errores de seguridad, protocolos, etc.
app.use(cors());

app.use(express.json()) // esto hace que el sv pueda entender datos de JSON y STRINGS
app.use(session({
    secret: 'secretomalvado',
    resave: false,
    saveUninitialized: false
}))  
app.use(passport.initialize())
app.use(passport.session())

//routes
app.use('/users', require('./routes/users'))
app.use('/localFlashMessages', require('./routes/localFlashMessages'))

app.use(function (req, res, next) {
    res.header('Content-Type', 'application/json');
    next();
});

module.exports = app;