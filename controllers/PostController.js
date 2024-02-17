// const Post = require("../models/Post") // não precisa colocar o JS
const models = require("../models") // não precisa colocar o JS

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
    // populate - recebe um relacionamento - lá do model
    // campos separados por espaço, trará somente esses campos
    // return res.send(await models.Post.find({}).populate("autor", "nome email")) // find sem nenhum parâmetro - poderia ter um {título}

    // mongoose paginate
    // poderia fazer um filtro - Post.paginate({autor: 123123}) - uma query
    // populate diferente - 
    // return res.send(await Post.paginate({},{
   
    return res.send(await models.Post.paginate({},{
      page: req.query.page || 1,
      // limit: 2,
      limit: req.query.page || 2,
      sort: 'createdAt', // padrão ASC, quiser inverter é só adicionar um traço '-' antes
      populate: [
        {
          path: 'autor',
          select: 'nome email'
        }
      ]
    }
    )) // find sem nenhum parâmetro - poderia ter um {título}
  }

  async show(req, res) {
    // const postEncontrado = await Post.findById(req.params.postId)
    const postEncontrado = await models.Post.findById(req.params.postId)
    // seria a mesma função da parte de baixo - short sintaxe
    //   .populate("autor", {select: "nome email"})
      .populate("autor", "nome email")
      .populate({
        path: "comentarios",
        populate: {
            path: "autor",
            // Só quero isso
            select: 'nome email'
        },
      })

    if (postEncontrado) {
      return res.send(postEncontrado)
    }

    return res.sendStatus(404)
  }

  async store(req, res) {
    // await Post.create(req.body)
    // await Post.create({ ...req.body, autor: req.usuarioId })
    await models.Post.create({ ...req.body, autor: req.usuarioId })
    return res.sendStatus(201)
  }

  async update(req, res) {
    // poderia ter um try catch pra algo mais complexo e que será usado em produção
    // Ou api para log da aplicação

    // ErrorHandler - seria interessante
    //  capturar os erros e devolver para tratamento

    // criar políticas de validação do usuário - Antes de executar as coisas

    // try{
    // poderia fazer os métodos separados - Find e depois o Update
    // sem ID correto há erro
    await models.Post.findByIdAndUpdate(req.params.postId, req.body)
    // await Post.findByIdAndUpdate(req.params.postId, req.body)
    return res.sendStatus(200)
    // } catch (err) {
    //     console.log(err)
    // }
  }

  async delete(req, res) {
    // await Post.findByIdAndDelete(req.params.postId)
    await models.Post.findByIdAndDelete(req.params.postId)
    return res.sendStatus(200)
  }
}

// pra poder usar fora
module.exports = new PostController()
