const User = require('../models/User')
const userController = {};

userController.getUsers = async (req,res) => {
    const users = await User.find();
    res.json(users)
}

userController.findById = async (id) => {
    return User.findOne({ 'id': id })
}

userController.findByEmail = async (email) => {
    return User.findOne({ 'email': email })
}

userController.findByCelNumber = async (celnumber) => {
    return User.findOne({ 'celnumber': celnumber })
}

userController.createUser = async (values) => {
    const { names, surnames, password, email, celnumber} = values
    const newUser = new User ({ names, surnames, password, email, celnumber })
    newUser.password = newUser.encryptPassword(password);
    await newUser.save()
    return newUser
}

module.exports = userController;