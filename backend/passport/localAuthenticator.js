const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const userController = require('../src/controllers/usersController')
const User = require('../src/models/User')

var LocalStorage = require('node-localstorage').LocalStorage;
localStorage = new LocalStorage('./scratch');

passport.serializeUser((user, done) => {
  done(null, user.id);
  //el serializer se encarga de guardar al usuiario en el navegador
  //y al momento de navegar en la pagina, no estar constantemente pidiendo el logueo
});

passport.deserializeUser(async (id, done) => {
  const user = await userController.findById(id);
  done(null, user);
  //el deserializer se encarga de ver si existe la id que recibe del usuario
  // cada vez que el usuario navega por una pagina
});

passport.use('local-register', new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password',
  passReqToCallback: true //el req se establece y se usa para cuando adewmas del mail/username y contraseña,
  //tambien pueda recibir los demas campos como edad, pais, etc.
}, async (req, email, password, done) => {
  const user = await userController.findByEmail(email)
  if(user) {//null es que no le das ningun error, false es que no le das ningun user
    return done(null, false, localStorage.setItem('failureMessage', 'El email ingresado ya se encuentra registrado.')
      );
  } else {
    const newUser = await userController.createUser(req.body)
    localStorage.setItem('successMessage', 'Te has registrado satisfactoriamente.');
    done(null, newUser);
  }
}));

passport.use('local-signin', new LocalStrategy({
  usernameField: 'celnumber',
  passwordField: 'celnumber',
  passReqToCallback: true
}, async (req, names, celnumber, done) => {
  const user = await userController.findByCelNumber(celnumber);
  if(!user) {
    return done(null, false, localStorage.setItem('failureMessage', 'El número ingresado no existe.'));
  }
  localStorage.setItem('successMessage', 'Te has logueado satisfactoriamente.')
  return done(null, user);
}));