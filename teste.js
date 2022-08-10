//importando mminha senha de um arquivo externo
const mysqlsenha = require('./senha')
const senhamysql = mysqlsenha.mysqlsenha

const Sequelize = require("sequelize") // importação do modulo sequelize

const sequelize = new Sequelize("teste" , "root" , senhamysql , {
    host: "localhost" ,
    dialect: "mysql" 
})

/* o comando squelize.authenticate() serve para conectar a aplicação ao banco de dados
o then() serve como se fosse uma função de callback assim que ele executar o squelize.authenticate()
ele irá retornar  os parametros que estão dentro dele. o catch segue o mesmo principio porém retorna os parametros apenas se não for possivel a execução do comando sequelize.authenticate()
*/ 

/*
sequelize.authenticate().then(function(){
    console.log('Conectado ao banco de dados MYSQL')
}).catch(function(erro){
    console.log("falha ao conectar"+erro)
})
*/

//criação de models no sequelize

const Postagem = sequelize.define('postagens' , {
    titulo: {
        type: Sequelize.STRING
    }, 
    conteudo: {
        type: Sequelize.TEXT
    }
})

Postagem.sync({force: true})
