const express = require("express");
const app = express();
const handlebars = require("express-handlebars")
const bodyParser = require('body-parser')
const Post = require('./models/Post');
const Sequelize = require('sequelize')
//  const { where } = require("sequelize/types");
//Config
    //Template Engine (usar ponto engine e deixar os arquivos na pasta views (nao layout))
        //app.engine('handlebars', handlebars.engine({defaultLayout: 'main'}))
        app.engine('handlebars', handlebars.engine({ 
            defaultLayout: 'main', 
            runtimeOptions: {
                allowProtoPropertiesByDefault: true,
                allowProtoMethodsByDefault: true, 
            },    
        }))
        app.set('view engine', 'handlebars')

//Configurando bodyParser
    app.use(bodyParser.urlencoded({extended: false}))
    app.use(bodyParser.json())

//sequelize.authenticate().then(function(){
//    console.log("Conectado com sucesso!")
//}).catch(function(erro){
//    console.log("Falha ao se conectar: "+erro)
//})

// const Postagem = sequelize.define('postagens', {
//     titulo:{
//         type: Sequelize.STRING
//     },
//     conteudo: {
//         type: Sequelize.TEXT
//     }
// })

//Postagem.sync({force: true})

//criando rota para o servidor
//app.get("/", function(req, res){
//    res.sendFile(__dirname + "/index.html")
//});

//criando rota com parametro
//app.get('/ola/:nome/:cargo', function(req, res){
//    res.send("<h1>Ola "+req.params.nome+"</h1>"+"<h2>Seu Cargo E: "+req.params.cargo+"</h2>");
//})

//rota para cadastro

app.get('/', function(req, res){
    Post.findAll({order: [['id', 'DESC']]}).then(function(posts){
        res.render('home', {posts: posts})
    })
})

app.get('/cadastro', function(req, res){
    res.render('form')
})

app.post('/dados', function(req, res){
    Post.create({
        titulo: req.body.titulo,
        conteudo: req.body.conteudo
    }).then(function(){
        res.redirect('/')
    }).catch(function(erro){
        res.send("Erro ao criar Post: " + erro)
    })
})

//rota para excluir (é get pq é teste)
app.get('/deletar/:id', function(req, res){
    Post.destroy({
        where: {
            id: req.params.id
        }
    }).then(() => {
        res.redirect('/')
    }).catch((erro) => {
        res.send('Esta postagem não existe!')
    })
})
//criando server com express
app.listen(8081, function(){
    console.log("Servidor on!");
});