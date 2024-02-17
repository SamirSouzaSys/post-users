const express = require('express')

const app = express()

app.get('/:nome', (req,res) => {
    // res.send('Hello world')
    res.send('Hello '+req.params.nome)
})

app.listen('4000')