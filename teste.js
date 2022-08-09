const mysqlsenha = require("./senha") //importa a senha de um arquivo externo que eu criei

const Sequilize = require("sequelize") //importa o modulo sequelize

 //adicionamos as informações de acesso ao banco de dados atraves dessa constante
const sequelize = new Sequelize("teste" , "root" , mysqlsenha , {
    host: "localhost" , //informa onde estamos roteando a aplicação
    dialect: "mysql" //Informa que estamos usando o banco de dados MYSQL
})

/* o comando squelize.authenticate() serve para conectar a aplicação ao banco de dados
o then() serve como se fosse uma função de callback assim que ele exxecutar o squelize.authenticate()
ele irá retornar  os parametros que estão dentro dele. o catch segue o mesmo principio porém retorna os parametros apenas se não for possivel a execução do comando sequelize.authenticate()
*/ 
sequelize.authenticate().then(function(){
    console.log('Conectado ao banco de dados MYSQL')
}).catch(function(erro){
    console.log("falha ao conectar" + erro)
})
