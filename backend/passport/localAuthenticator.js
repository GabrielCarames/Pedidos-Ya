const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const userController = require('../src/controllers/usersController')
const User = require('../src/models/User')
const flash = require('connect-flash')

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

passport.use('register', new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password',
  passReqToCallback: true //el req se establece y se usa para cuando adewmas del mail/username y contraseña,
  //tambien pueda recibir los demas campos como edad, pais, etc.
}, async (req, email, password, done) => {
  const user = await userController.findByEmail(email)
  if(user) {//null es que no le das ningun error, false es que no le das ningun user
    return done(null, false
      //req.flash('signupMessage', 'El email ya está siendo utilizado')
      );
  } else {
    const newUser = await userController.createUser(req.body)
    done(null, newUser, req.flash('signupMessage', 'Usuario creado satisfactoriamente'));
  }
}));

passport.use('local-signin', new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password',
  passReqToCallback: true
}, async (req, email, password, done) => {
  const user = await userController.findByEmail(email);
  if(!user) {
    return done(null, false, req.flash('signinMessage', 'No User Found'));
  }
  if(!user.comparePassword(password)) {
    return done(null, false, req.flash('signinMessage', 'Incorrect Password'));
  }
  return done(null, user);
}));