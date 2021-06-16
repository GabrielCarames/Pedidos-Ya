const { Router } = require('express')
const router = Router()

const { getUsers, createUser, getUser, updateUser, deleteUser } = require('../controllers/usersController')

router.route('/')
    .get(getUsers)

router.route('/register')
    .post(createUser)

/*router.route('/register').post((req, res) => {
    const data = req.body
    console.log('TACHANCKAAAAAAAAAAAAAAAAAA', data)
})*/

module.exports = router

