require('./config/mongoose')
const express = require("express")

// const Post = require('./models/Post')

// const PostController = require('./controllers/PostController')
const PostRoutes = require('./routes/PostRoutes')

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

app.listen("4000")
