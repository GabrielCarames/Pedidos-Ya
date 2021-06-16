const userController = {};

const User = require('../models/User')

userController.getUsers = async (req,res) => {
    const users = await User.find();
    res.json(users)
}

userController.createUser = async (req,res) => {
    const { names, surname, password, email, age} = req.body
    const newUser = new User ({ names, surname, password, email, age})
    await newUser.save()
    res.json({message: 'Usuario creado'})
}

userController.getUser = (req,res) => res.json({message: []})

userController.updateUser = (req,res) => res.json({message: []})

userController.deleteUser = (req,res) => res.json({message: []})

module.exports = userController;