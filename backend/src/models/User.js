const { Schema, model } = require('mongoose');

const User = new Schema ({
    names: String,
    surname: String,
    password: {
      type: String,
      required: true,
      trim: true, //el trim lo que hace es eliminar espacios del campo, ej: "   soy moli nete """
      
    },
    email: String,
    age: Number
}, {
    timestamps: true
})

module.exports = model('User', User)