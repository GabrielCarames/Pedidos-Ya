const { Router } = require('express')
const router = Router()

var LocalStorage = require('node-localstorage').LocalStorage;
localStorage = new LocalStorage('./scratch');

router.get('/', function (req, res) {
  const localFlashMessage = localStorage.getItem("successMessage")
  res.send(localFlashMessage)
})

module.exports = router

