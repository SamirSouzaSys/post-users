const routes = require('express').Router()
const ComentarioController = require('../controllers/ComentarioController')
const validator = require('express-joi-validation').createValidator({passError: true})
const ComentarioValidator = require('../validators/ComentarioValidator')

// Routes comentarios/
routes.post('/post/:postId', validator.body(ComentarioValidator), ComentarioController.store)
// put - update de todos os campos, objeto completo
// patch - update de alguns campos
// sem validação - simplismente incrementa
routes.patch('/like/:comentarioId', ComentarioController.like)


module.exports = routes