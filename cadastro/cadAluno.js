//requisitando o pacote mongoose
const mongoose = require('mongoose');
//criar a chave de conexão
mongoose.connect('mongodb://127.0.0.1:27017/escola', 
    {
        useNewUrlParser : true,
        useUnifiedTopology : true,
        serverSelectionTimeoutMS : 20000
    }
);
//executando a conexão
const db = mongoose.connection;
//codigos de teste da conexão
db.on('error', console.error.bind(console, 'connection error : '))
db.once('open',function(){
    console.log("Estamos conectados ao mongoDB")
})

//segunda - fase - usando o banco- C do CRUD

//1 - criando um Schema
const alunoSchema = new mongoose.Schema({
    matricula : String,
    nome : String,
    idade : Number,
    turma : String
});

//2 - criando a model
const Alunos = mongoose.model('Alunos', alunoSchema)


//colocar dados dentro desta collection

const carlos = new Alunos({
   matricula : 'rm501',
   nome : 'Carlos Silva',
   idade : 18,
   turma : '2MIB' 
});

carlos.save();

const maria = new Alunos({
    matricula : 'rm510',
    nome : 'Maria José',
    idade : 17,
    turma : '2MIB' 
 });

 maria.save();

 



