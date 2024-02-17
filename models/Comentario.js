const mongoose = require('mongoose')

const ComentarioSchema = new mongoose.Schema({
    texto: {
        type: String,
        required: true,
        maxlength: 500
    },
    likes: {
        type: Number,
        required: true
    },
    autor: {
        // tipo igual ao criado no Post
        type: mongoose.Schema.Types.ObjectId,
        // referencia o model de usuario
        ref: 'Usuario', // como se fosse um FK
        required: true
    },
    post: {
        // tipo igual ao criado no Post
        type: mongoose.Schema.Types.ObjectId,
        // referencia o model de usuario
        ref: 'Post', // como se fosse um FK
        required: true
    }
}, {timestamps: true})

module.exports = mongoose.model('Comentario', ComentarioSchema)