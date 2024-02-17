const Post = require('../models/Post') // não precisa colocar o JS

class PostController {
    // default methods - convensão
    // index   // listagem
    // show    // detalhar a partir de um id
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

    async show (req, res) {
        const postEncontrado = await Post.findById(req.params.postId)

        if(postEncontrado) {
            return res.send(postEncontrado)
        }

        return res.sendStatus(404)
    }

    async store (req, res) {
        await Post.create(req.body)
        return res.sendStatus(201)
    }

    async update (req, res) {
        // poderia ter um try catch pra algo mais complexo e que será usado em produção
        // Ou api para log da aplicação

        // ErrorHandler - seria interessante
        //  capturar os erros e devolver para tratamento

        // criar políticas de validação do usuário - Antes de executar as coisas

        // try{
            // poderia fazer os métodos separados - Find e depois o Update
            // sem ID correto há erro
            await Post.findByIdAndUpdate(req.params.postId, req.body)
            return res.sendStatus(200)
        // } catch (err) {
        //     console.log(err)
        // }
    }

    async delete (req, res){
        await Post.findByIdAndDelete(req.params.postId)
        return res.sendStatus(200)
    }
}

// pra poder usar fora
module.exports = new PostController()