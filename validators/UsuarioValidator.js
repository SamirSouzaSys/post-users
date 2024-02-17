const Joi = require('@hapi/joi')

const UsuarioSchemaValidator = Joi.object({
    nome: Joi.string().max(200).required(),
    email: Joi.string().email().max(250).required(),
    senha: Joi.string().min(6).max(12).required(),
})

module.exports = UsuarioSchemaValidator