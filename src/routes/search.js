const { Router } = require('express')
const searchController = require('../controllers/searchController')
const router = Router()

router.post('/handleSearch', async function (req, res) {
    const search = req.body.search
    const searchResults = await searchController.findBySearch(search)
    console.log(searchResults)
    res.send(searchResults)
})

module.exports = router

