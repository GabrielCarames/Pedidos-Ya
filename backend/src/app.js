const express = require('express');
const cors = require('cors')
const session = require('express-session')
const passport = require('passport');
const flash = require('connect-flash');
const app = express();
require('../passport/localAuthenticator');

//setting
//Si se sube la aplicacion a una nube, estos te dan un puerto aleatorio a partir de una variable de entorno
//Entonces si existe esa variable con ese puerto, la usa, sino usa la de 3000
app.set('port', process.env.PORT || 3000)

//middlewares
//son funcioens que se ejecutan antes de llegar a las rutas
app.use(cors()) // cors se encarga de que el sv de backend y sv de front end se comuniquen sin problemas, como por errores de seguridad, protocolos, etc.
app.use(express.json()) // esto hace que el sv pueda entender datos de JSON y STRINGS
app.use(session({
    secret: 'secretomalvado',
    resave: false,
    saveUninitialized: false
}))
app.use(flash())
app.use(passport.initialize())
app.use(passport.session())

app.use((req, res, next) => {
    //app.locals son las variables globales
    app.locals.singupMessages = req.flash('singupMessage')
    app.locals.singinMessages = req.flash('singupMessage')
    //el next sirve para que continue chapoteando hacia abajo
    //sino se quedaria recargando infinitamente
    next()
})

//routes
app.use('/users', require('./routes/users'))

module.exports = app;