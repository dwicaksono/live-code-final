const createError = require('http-errors')
const { User, Country } = require('../models')
const { verifyJwt } = require('../helper/jwt')


function authen(req, res, next) {
  try {
    const decode = verifyJwt(req.headers.token)
    req.user = decode
    next()
  } catch (err) {
    next(err)
  }
}

module.exports = authen