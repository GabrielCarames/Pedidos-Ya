const { Router } = require("express");
const router = Router();
const passport = require("passport");
const userController = require("../controllers/usersController");

router.post("/register", passport.authenticate("local-register", 
  {
    successRedirect: "http://localhost:3001", //si bien el success este no hace nada realmente, es necesario para que ande todo
    passReqToCallback: true,
  }
));

router.post("/login", passport.authenticate("local-signin"), function(req, res) {
  // If you use "Content-Type": "application/json"
  // req.isAuthenticated is true if authentication was success else it is false
  // importante, el req.session.passport, tiene almacenado al user si se logueo correctamente, esto es lo que usa la funcion isAuthenticated()
  res.json({auth: req.isAuthenticated()}); //esto funcionaba piola, pero no tiene sentido usarlo si no lo puedo verificar luego en caso de error en el login :C
  //igual por alguna razon lo necesito para user luego el config.data del frontend, me da paja saber por que proba despues algun dai
});

module.exports = router;
