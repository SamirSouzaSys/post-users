require('./config/mongoose')
const express = require("express")

// removido pra um lugar correto seguindo o padrão do Post
// atalho tbm
// const validator = require('express-joi-validation').createValidator({passError: true})
// const UsuarioValidator = require('./validators/UsuarioValidator')

// const Post = require('./models/Post')

// const PostController = require('./controllers/PostController')
const PostRoutes = require('./routes/PostRoutes')
//antigo atalho para um arquivo
// const UsuarioController = require('./controllers/UsuarioController')
const UsuarioRoutes = require('./routes/UsuarioRoutes')

const app = express()
// um middleware - executa antes de algo
app.use(express.json())

app.get("/", (req, res) => {
  // res.send('Hello world')
  res.send("Hello ")
})

// app.post('/posts', async (req, res) => {
//   // post a partir dos dados vindo via http
//   const postCriado = await Post.create(req.body)
//   console.log(postCriado)
//   // manda pra o front
//   res.sendStatus(201)
// })

// ;; removido para usuarioRoutes
// app.post('/usuarios', validator.body(UsuarioValidator), UsuarioController.store)
app.use('/usuarios', UsuarioRoutes)

// to file PostRoutes
// app.get('/posts', PostController.index)
// Vai no PostRoutes e ver se tem um tratamento dessa rota
app.use('/posts', PostRoutes)
// app.post('/posts', PostController.store)

// // async function testar () {}
// const testar = async () => {
//   const Test = mongoose.model("Test", { name: String })

//   const t = new Test({
//     name: "Testando mongoose novamente",
//   })

//   await t.save().then(() => {
//     console.log('Objeto criado')
//   })
// }

// testar()

// error handler
// express - quando há 4 parâmetros, o primeiro é de tratamento de erro
app.use((err, req, res, next) => {
  // veio devido ao framework Joi
  if(err && err.error && err.error.isJoi) {
    res.status(400).json({
      tipo: err.type,
      mensagem: err.error.toString()
    })
  } else {
    // deixa pra o próx middleware
    next(err)
  }
})

app.listen("4000")
