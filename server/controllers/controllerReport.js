const { Report, Country } = require('../models')
const createError = require('http-errors')
class ControllerReport {
  static getAllReport(req, res, next) {
    if (req.headers.token) {
      Report.findAll()
        .then(result => {
          res.status(200).json(result)
        })
        .catch(err => {
          next(err)
        })
    } else {
      throw createError(404, 'NOT FOUND')
    }
  }

  static postReport(req, res, next) {
    let { cases, CountryId } = req.body
    if (req.headers.token) {
      Report.create({ report, CountryId })
        .then(result => {
          return Country.update(cases)
          res.status(200).json(result)
        })
        .then(resultCountry => {
          // return Country.
        })
    } else {
      throw createError(404, "NOT FOUND")
    }

  }
}
module.exports = ControllerReport