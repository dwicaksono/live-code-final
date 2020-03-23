const { Country } = require('../models')
const createError = require('http-errors')

class ControllerCountry {
  static getAllCounrty(req, res, next) {
    if (req.headers.token) {
      Country.findAll()
        .then(result => {
          res.status(200).json(result)
        })
        .catch(err => {
          next(err)
        })
    } else {
      throw createError(404, 'NOT FOND')
    }
  }
}

module.exports = ControllerCountry