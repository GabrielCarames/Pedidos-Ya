const userController = {};

const User = require('../models/User')

userController.getUsers = async (req,res) => {
    const users = await User.find();
    res.json(users)
}

userController.findByEmail = async (email) => {
    return User.findOne({ 'email': email })
}

userController.findByCelNumber = async (celnumber) => {
    return User.findOne({ 'celnumber': celnumber })
}

userController.findById = async (id) => {
    return User.findOne({ 'id': id })
}

userController.createUser = async (values) => {
    const { names, surnames, password, email, celnumber} = values
    const newUser = new User ({ names, surnames, password, email, celnumber })
    newUser.password = newUser.encryptPassword(password);
    await newUser.save()
    return newUser
}

userController.getUser = (req,res) => res.json({message: 'fua me invocaste xdddddddddddddddddddddddddddddddd'})

userController.updateUser = (req,res) => res.json({message: []})

userController.deleteUser = (req,res) => res.json({message: []})

module.exports = userController;