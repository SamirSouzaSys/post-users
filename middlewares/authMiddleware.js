const jwt = require("jsonwebtoken")
const authConfig = require("../config/authConfig")
// lib padrão node - util
// ajuda a resolver logo a promisse
const { promisify } = require('util')

// exporta diretamente a função
// next devido a ser um middleware
module.exports = async (req, res, next) => {
  // token vem via header de authorization
  const authHeader = req.headers.authorization

  if (!authHeader) {
    return res.status(401).json({ error: "Token não fornecido" })
  }

  // Tipo de autenticação - bearer autentication
  // { authorization: "Bearer TOKEN_FORNECIDO"}
  const [, token] = authHeader.split(" ")

  try {
    // Models/Usuário Js - UsuarioSchema.statics -> gerarToken -> return - jwt.sign
    // jwt.verify - se o token tiver errado será lançada uma exceção
    // jwt.verify - retorna uma promisse
    const tokenDecodificado = await promisify(jwt.verify)(token, authConfig.secret)

    // quem está gerando o token
    // No usuário foi adicionado um ID
    // aqui vamos setar um outro ponto - usuarioId
    req.usuarioId = tokenDecodificado.id

    return next()
  } catch (err) {
    return res.status(401).json({ error: "Token inválido" })
  }
}
