const router = require('express').Router()
const ControllerUser = require('../controllers/contrllerUser')

router.post('/login', ControllerUser.logiUser)


module.exports = router