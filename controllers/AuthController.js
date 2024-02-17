// roteamento para que o JWT seja gerado
const Usuario = require('../models/Usuario')

class AuthController {
    async store (req, res) {
        const { email, senha } = req.body
        const usuarioEncontrado = await Usuario.findOne({email})

        if (!usuarioEncontrado || !await usuarioEncontrado.compararHashSenha(senha)) {
            return res.status(400).json({error: 'E-mail/senha inválidos'})
        }

        // TODO adicionar refresh token - lembrar-me - logar automaticamente
        return res.json({token: Usuario.gerarToken(usuarioEncontrado)})
    }
}

module.exports = new AuthController()