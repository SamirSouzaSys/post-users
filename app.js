const express = require("express")
const mongoose = require('mongoose')

const app = express()

app.get("/:nome", (req, res) => {
  // res.send('Hello world')
  res.send("Hello " + req.params.nome)
})

mongoose.connect(
  "mongodb+srv://samirguitar:QtfX9VO3aF5FWFjP@cluster0.8esoif9.mongodb.net/?retryWrites=true&w=majority"
//   ,{
    // useNewUrlParser: true,
    // useFindAnModify: true}
)

// async function testar () {}
const testar = async () => {
  const Test = mongoose.model("Test", { name: String })

  const t = new Test({
    name: "Testando mongoose novamente",
  })

  await t.save().then(() => {
    console.log('Objeto criado')
  })
}

testar()

app.listen("4000")
