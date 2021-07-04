const { Router } = require('express')
const router = Router()

var LocalStorage = require('node-localstorage').LocalStorage;
localStorage = new LocalStorage('./scratch');

router.get('/', function (req, res) {
  const localFlashMessage = localStorage.getItem("successMessage")
  res.send(localFlashMessage)
})

router.put('/removeflashmessage', function (req, res) {
  localStorage.removeItem('successMessage');
})

module.exports = router

