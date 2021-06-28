const { Router } = require("express");
const router = Router();
const passport = require("passport");
const userController = require("../controllers/usersController");

router.post("/register", passport.authenticate("local-register", 
  {
    successRedirect: "http://localhost:3001", //si bien el success este no hace nada realmente, es necesario para que ande todo
    failureRedirect: "/users/register",
    passReqToCallback: true,
  }
));

router.post("/login", passport.authenticate("local-signin",
  {
    successRedirect: "http://localhost:3001",
    failureRedirect: "/users/login",
    passReqToCallback: true
  }
), (req, res) => {
  // If you use "Content-Type": "application/json"
  // req.isAuthenticated is true if authentication was success else it is false
  res.json({auth: req.isAuthenticated()});
});

module.exports = router;
