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
      Report.create({ cases, CountryId, UserId: req.user.id })
        .then(result => {
          console.log(result)
          return Country.findOne({ where: { id: CountryId } })
        })
        .then(resultCountry => {
          return Country.update({ cases: Number(resultCountry.cases) + Number(cases) }, { where: { id: CountryId }, include: { model: Report }, returning: true })
        })
        .then(resultAkhir => {
          res.status(201).json(resultAkhir)
        })
    } else {
      throw createError(404, "NOT FOUND")
    }
  }

  static deleteReport(req, res, next) {
    let id = req.params.id
    let tmp = null
    Report.findOne({ where: { id }, returning: true })
      .then(result => {
        tmp = result
        return Report.destroy({ where: { id } })
      })
      .then(resultDestroy => {
        res.status(200).json(tmp)
      })
      .catch(err => {
        next(err)
      })
  }
}
module.exports = ControllerReport