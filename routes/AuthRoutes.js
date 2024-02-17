const routes = require('express').Router()

const AuthController = require('../controllers/AuthController')

const validator = require('express-joi-validation').createValidator({passError: true})
const AuthValidator = require('../validators/AuthValidator')

routes.post('/', validator.body(AuthValidator), AuthController.store)

module.exports = routes