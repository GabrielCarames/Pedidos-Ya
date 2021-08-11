const { Schema, model } = require("mongoose");

const Store = new Schema(
  {
    name: {
      type: String
    },
    logo: {
      type: String,
      required: false,
      default: 'https://images.rappi.com.ar/marketplace/coto-1599858972.png?d=70x70',
    },
    products: [
      {
          type: Schema.Types.ObjectId,
          ref: 'Product',
      }
    ]
  }
);

module.exports = model("Store", Store);
