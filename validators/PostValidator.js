// validação do http
// semelhante ao BD

const Joi = require('@hapi/joi')

const PostSchemaValidator = Joi.object({
    titulo: Joi.string().max(120).required(),
    texto: Joi.string().max(200).required(),
})

module.exports = PostSchemaValidator