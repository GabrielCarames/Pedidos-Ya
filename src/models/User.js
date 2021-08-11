const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt-nodejs");

const User = new Schema(
  {
    names: {
      type: String
    },
    surnames: {
      type: String
    },
    password: {
      type: String,
      required: false,
      trim: false, //el trim lo que hace es eliminar espacios del campo, ej: "   soy moli nete """
    },
    email: {
      type: String,
    },
    celnumber: {
      type: Number
    }
  },
  {
    timestamps: true,
  }
);

User.methods.encryptPassword = (password) => {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(10));
  //hassync lo que hace es recibir lo que se quiere encriptar, y luego con el gensaltsync, se indica el numero de veces que se lo quiere encriptar
  //cuanto mayor sea, mejor en teoria, mas dificil de desencriptar
};

User.methods.comparePassword = function (password) {
  return bcrypt.compareSync(password, this.password); //compara las contraseñas de la bd y la que recibe
};

module.exports = model("User", User);
