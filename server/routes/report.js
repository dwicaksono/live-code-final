const router = require('express').Router()
const ControllerReport = require('../controllers/controllerReport')
const authen = require('../middleware/authen')


router.get('/', authen, ControllerReport.getAllReport)
router.post('/', authen, ControllerReport.postReport)
router.delete('/:id', authen, ControllerReport.deleteReport)


module.exports = router