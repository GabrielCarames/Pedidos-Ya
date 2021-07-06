const Product = require('../models/Product')
const Store = require('../models/Store')
const mierdaController = {};

mierdaController.mete = async (mierda) => {
    console.log(mierda)
    const newMierda = new Product(mierda);
    await newMierda.save();
    await Store.findOneAndUpdate({ _id: '60e4566bdaa76206388420fc' },
        {
            $push: {
                products: newMierda
            }
        }
    )
    getAllMierdas = async () => {
        return await Store.find().populate({path: 'products',
        model: 'Product'}) //ta bien 
      }
    const algo = await getAllMierdas()
    
    console.log(algo)
    return newMierda;
}

module.exports = mierdaController;