const { Router } = require('express')
const router = Router()

const { getUsers, createUser, getUser, updateUser, deleteUser } = require('../controllers/usersController')

router.route('/')
    .get(getUsers)
    .post(createUser)

module.exports = router