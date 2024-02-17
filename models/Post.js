// Model

const mongoose = require('mongoose')

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
    }
}, {
    timestamps: true
    // createdAt
    // updatedAt
})

module.exports = mongoose.model('Post', PostSchema)