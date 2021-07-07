const Product = require('../models/Product')
const Store = require('../models/Store')
const mierdaController = {};

mierdaController.mete = async (mierda, price) => {
    console.log(mierda, {price})
    const newMierda = new Product(
        {
            logo: "https://images.rappi.com.ar/products/528572-1562879532144.png?d=136x136",
            name: 'lentejas',
            price: 181
        }
    );
    await newMierda.save();
    await Store.findOneAndUpdate({ _id: '60e5adee61b128f7ce79049b' },
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
    return newMierda;
}

module.exports = mierdaController;