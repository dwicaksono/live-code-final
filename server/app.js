const express = require('express')
const app = express()
const routes = require('./routes/index')
const cors = require('cors')
const port = 3000
const errorHandler = require('./middleware/errorHandler.js')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/', routes)

app.use(errorHandler)

app.listen(port, console.log(`server running on 3000`))

module.exports = app
