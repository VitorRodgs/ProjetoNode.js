const db = require('./db')

const Post = db.sequelize.define('postagens',{
    titulo: {
        type: db.Sequelize.STRING
    },
    conteudo: {
        type: db.Sequelize.TEXT
    }
})

//So executar o comando sync uma vez, apenas para executar o model
//Post.sync({force: true})

//exportando o modulo para usar em outros arquivos
module.exports = Post