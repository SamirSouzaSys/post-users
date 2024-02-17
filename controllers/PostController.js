const Post = require('../models/Post') // não precisa colocar o JS

class PostController {
    // default methods - convensão
    // index   // listagem
    // show    // detalhar
    // create  // get dos dados que serão necessários no post
    // store   // post
    // edit    // get semelhante ao create - busca dados necessários para a tela de edição
    // update  // PUT já fiz o necessário na tela de edit, aí chama o update
    // delete  // DELETE ou POST

    // -----
    // custom methods

    async index(req, res) {
        return res.send(await Post.find({})) // find sem nenhum parâmetro - poderia ter um {título}
    }

    async store (req, res) {
        await Post.create(req.body)
        return res.sendStatus(201)
    }
}

// pra poder usar fora
module.exports = new PostController()