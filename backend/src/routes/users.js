const { Router } = require("express");
const router = Router();
const passport = require("passport");
const {
  getUsers,
  createUser,
  getUser,
  updateUser,
  deleteUser,
} = require("../controllers/usersController");

/*router.route('/')
    .get(getUsers)*/

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
));

/*router.route('/register')
    .post(createUser)*/

/*router.route('/register').post((req, res) => {
    const data = req.body
    console.log('TACHANCKAAAAAAAAAAAAAAAAAA', data)
})*/

module.exports = router;
