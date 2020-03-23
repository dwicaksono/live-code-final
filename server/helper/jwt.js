const jwt = require('jsonwebtoken')
const secret = "10"

const generateJwt = payload => {
  return jwt.sign(payload, secret)
}

const verifyJwt = token => {
  return jwt.verify(token, secret)
}

module.exports = { generateJwt, verifyJwt }