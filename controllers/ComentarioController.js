// const Comentario = require('../models/Comentario')
// const Post = require('../models/Post')

const models = require('../models')

class ComentarioController {
    async store(req, res) {
        // const comentarioCadastrado = await Comentario.create({
        const comentarioCadastrado = await models.Comentario.create({
            ...req.body,
            likes: 0,
            autor: req.usuarioId,
            // postId
            post: req.params.postId
        })

        const post = await models.Post.findById(req.params.postId)
        post.comentarios.push(comentarioCadastrado.id)
        // save vai servir como um update
        await post.save()
        
        return res.sendStatus(201)
    }

    async like(req, res) {
        // transforma operações do mongoose que são assíncronas em síncronas
        // :comentarioId
        // no lugar do {} poderia usar o req.boy, mas não queremos todo o objetto
        await models.Comentario.findByIdAndUpdate(req.params.comentarioId, {
            // likes = likes + 1 -> mas aí teríamos que consultar esse valor antes
            // operador mongoose / mongoDb
            // $set likes -> o mongoose faz isso, semelhante ao set do sql
            // $inc -> operador incremental do campo
            $inc : {likes: 1}
        })
        // 200 é o padrão
        return res.send()
    }
}

module.exports = new ComentarioController()