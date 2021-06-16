const { Schema, model } = require('mongoose');

const User = new Schema ({
    names: String,
    surnames: String,
    password: {
      type: String,
      required: false,
      trim: true, //el trim lo que hace es eliminar espacios del campo, ej: "   soy moli nete """
      
    },
    email: String,
    age: Number
}, {
    timestamps: true
})

module.exports = model('User', User)