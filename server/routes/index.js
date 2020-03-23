const router = require('express').Router()
const user = require('./user')
const country = require('./country')
const report = require('./report')

router.use('/', user)
router.use('/countries', country)
router.use('/reports', report)

module.exports = router