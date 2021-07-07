const { Router } = require('express')
const mierdaController = require('../controllers/mierdaController')
const router = Router()

router.post('/llenamierda', async function (req, res) {
    const mierda = req.body
    const price = 120
     await mierdaController.mete(mierda, price)
})

module.exports = router

