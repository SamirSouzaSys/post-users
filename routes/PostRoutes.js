
// obtém do express como ele gerencia as rotas
// ensina o express como ele controla as rotas nessa entidade
const routes = require('express').Router()

// passa as funções de roteamento pra ele
const PostController = require('../controllers/PostController')

// routes.get('/posts', PostController.index)
// posts removido ('/posts/...')
routes.get('/', PostController.index)
routes.get('/:postId', PostController.show)
routes.post('/', PostController.store)
routes.put('/:postId', PostController.update)
routes.delete('/:postId', PostController.delete)

// exporta rotas pra serem usadas no bootstrap da aplicação
module.exports = routes