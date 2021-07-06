const { Router } = require('express')
const mierdaController = require('../controllers/mierdaController')
const router = Router()

router.post('/llenamierda', async function (req, res) {
    const mierda = req.body
    console.log(mierda)
     await mierdaController.mete(mierda)
    console.log(mierda)
})

module.exports = router

