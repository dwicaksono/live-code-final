const router = require('express').Router()
const ControllerReport = require('../controllers/controllerReport')

router.get('/', ControllerReport.getAllReport)
router.post('/', ControllerReport.getAllReport)


module.exports = router