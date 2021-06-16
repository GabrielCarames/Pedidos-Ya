const { Router } = require('express')
const router = Router()
const passport = require('passport')
const { getUsers, createUser, getUser, updateUser, deleteUser } = require('../controllers/usersController')

router.route('/')
    .get(getUsers)

router.post('/register', passport.authenticate('register',
  {
    successRedirect: '/',
    failureRedirect: '/user/register',
    failureFlash: true,
    passReqToCallback: true
  }
));
    

/*router.route('/register')
    .post(createUser)*/

/*router.route('/register').post((req, res) => {
    const data = req.body
    console.log('TACHANCKAAAAAAAAAAAAAAAAAA', data)
})*/

module.exports = router

