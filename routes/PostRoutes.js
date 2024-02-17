
// obtém do express como ele gerencia as rotas
// ensina o express como ele controla as rotas nessa entidade
const routes = require('express').Router()

// passa as funções de roteamento pra ele
const PostController = require('../controllers/PostController')

//captura o error, mas deixa que outro processe essa situação
const validator = require('express-joi-validation').createValidator({passError: true})
const PostValidator = require('../validators/PostValidator')


// routes.get('/posts', PostController.index)
// posts removido ('/posts/...')
// parâmetro do meio é o middleware - executado antes de ser passado pra uma rota
routes.get('/', PostController.index)
routes.get('/:postId', PostController.show)
// posso validar o queryParam
//  
routes.post('/', validator.body(PostValidator), PostController.store)
routes.put('/:postId', validator.body(PostValidator), PostController.update)
routes.delete('/:postId', PostController.delete)

// exporta rotas pra serem usadas no bootstrap da aplicação
module.exports = routes