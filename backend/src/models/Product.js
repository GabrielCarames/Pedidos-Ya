const { Schema, model } = require("mongoose");

const Product = new Schema(
  {
    name: {
      type: String
    },
    price: {
      type: Number
    },
    logo: {
      type: String,
      required: false,
      default: 'https://images.rappi.com.ar/products/1032116-1582131919950.png?d=136x136',
    }
  }
);

module.exports = model("Product", Product);
