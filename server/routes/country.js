const router = require('express').Router()
const ConrtrollerCountry = require('../controllers/controllerCountry')

router.get('/', ConrtrollerCountry.getAllCounrty)

module.exports = router