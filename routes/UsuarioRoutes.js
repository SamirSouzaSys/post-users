const routes = require('express').Router()

const UsuarioController = require('../controllers/UsuarioController')

const validator = require('express-joi-validation').createValidator({passError: true})
const UsuarioValidator = require('../validators/UsuarioValidator')

routes.post('/', validator.body(UsuarioValidator), UsuarioController.store)

module.exports = routes