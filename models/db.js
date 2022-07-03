//Conectando com o Banco de Dados
const Sequelize = require('sequelize')
const sequelize = new Sequelize('testepostapp', 'root', 'suasenhaaqui', {
    host: "localhost",
    dialect: 'mysql'
})


//Fazendo export das duas variaveis para usar no outro arquivo
module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}