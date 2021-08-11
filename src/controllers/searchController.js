const Product = require('../models/Product')
const Store = require('../models/Store')
const searchController = {};

searchController.findBySearch = async (search) => {
    const products = await Product.find({"name": search})
    const stores = await Store.find({'name': search}).populate({path: 'products', model: 'Product'})
    return ({products, stores})
}

module.exports = searchController;