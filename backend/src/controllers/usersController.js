const userController = {};

const User = require('../models/User')

userController.getUsers = async (req,res) => {
    const users = await User.find();
    res.json(users)
}

userController.findByEmail = async (email) => {
    return User.findOne({ 'email': email })
}

userController.findById = async (id) => {
    return User.findOne({ 'id': id })
}

userController.createUser = async (req,res) => {
    const { names, surnames, password, email, age} = req.body
    const newUser = new User ({ names, surnames, password, email, age})
    await newUser.save()
    res.json({message: 'Usuario creado'})
}

userController.getUser = (req,res) => res.json({message: 'fua me invocaste xdddddddddddddddddddddddddddddddd'})

userController.updateUser = (req,res) => res.json({message: []})

userController.deleteUser = (req,res) => res.json({message: []})

module.exports = userController;