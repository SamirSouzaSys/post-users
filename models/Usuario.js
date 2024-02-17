const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')

// regras pra base de dados
const UsuarioSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true,
        maxLength: 200
    },
    email: {
        type: String,
        required: true,
        maxLength: 250,
        // será convertido antes de add no BD
        lowercase: true,
        unique: true
    },
    senha: {
        type: String,
        required: true,
    },
},{
    timestamps: true
})

// pre
// antes do momento executa algo
// function -> deve ser escrita dessa forma, pois da outra forma '=>' não há acesso ao this
UsuarioSchema.pre('save', async function (next) {
    if(!this.isModified('senha')) {
        return next()
    }

    this.senha = await bcrypt.hash(this.senha, 8)
})

module.exports = mongoose.model('Usuario', UsuarioSchema)