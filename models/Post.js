// Model
const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2')

const PostSchema = new mongoose.Schema({
    // id - automático
    // version - automático
    titulo: {
        type: String,
        required: true,
        maxlength: 120
    },
    texto: {
        type:String,
        required: true,
        maxlength: 500
    },
    autor: {
        type: mongoose.Schema.Types.ObjectId, // segue o padrão de uma FK - linkar models
        ref: 'Usuario', // referenciar model
        required: true
    },
    // OneToMany -> belongs to many
    comentarios: [{
        type: mongoose.Schema.Types.ObjectId, // segue o padrão de uma FK - linkar models
        ref: 'Comentario', // referenciar model
        required: true
    }]
}, {     
    timestamps: true
    // createdAt
    // updatedAt
})

PostSchema.plugin(mongoosePaginate)

module.exports = mongoose.model('Post', PostSchema)