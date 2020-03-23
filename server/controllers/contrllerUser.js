const { User } = require('../models')
const { generateJwt, verifyJwt } = require('../helper/jwt')
const createError = require('http-errors')
class ControllerUser {
  static logiUser(req, res, next) {
    let { username, password } = req.body
    User.findOne({ where: { username } })
      .then(user => {
        if (!user) {
          throw createError(400, 'your username or password incorrect')
        } else {
          if (user.username === username && user.password === password) {
            let payload = { id: user.id, username: user.username }
            let token = generateJwt(payload)
            res.status(200).json({ token: token, id: user.id, username: user.username })
          }
        }
      })
      .catch(err => {
        next(err)
      })
  }
}

module.exports = ControllerUser