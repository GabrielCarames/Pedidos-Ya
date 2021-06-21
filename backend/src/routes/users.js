const { Router } = require('express')
const router = Router()
const passport = require('passport')
const { getUsers, createUser, getUser, updateUser, deleteUser } = require('../controllers/usersController')

/*router.route('/')
    .get(getUsers)*/

router.post('/register', passport.authenticate('register',
  {
    //error con el cors de mierda
    //una vez consiga mandarlo de nuevo al home de react,
    //mandar de alguna manera el flash message
    //intalar tambien el react global esa meirda de antes de flash
    //y fiajrte que para devolver el flash si puedo hacer algo con el res desde el formhelper al mometno de hacer el axios.post a este register
    successRedirect: 'http://localhost:3001', //si bien el succes este no hace nada realmente, es necesario para que ande todo
    failureRedirect: '/user/register',
    failureFlash: true,
    passReqToCallback: true
  }
)
);


/*router.route('/register')
    .post(createUser)*/

/*router.route('/register').post((req, res) => {
    const data = req.body
    console.log('TACHANCKAAAAAAAAAAAAAAAAAA', data)
})*/

module.exports = router

