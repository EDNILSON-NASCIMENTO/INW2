const leia = require("prompt-sync")()

let matriculas = ["MAT01","MAT02","MAT03","MAT04"]
let alunos = ["MARCOS","PEDRO","MARIA","PAULO"]
let notas = [0,0,0,0]
let situacao

console.log("MAT\tALUNO\tNOTA")
console.log("---------------------------------------------")
for(let i=0; i<matriculas.length; i++){
    console.log(matriculas[i]+'\t'+alunos[i]+'\t'+notas[i])
}
console.log("---------------------------------------------")

console.log("Digitação de notas")
for(let i=0; i<matriculas.length; i++){
    console.log(matriculas[i]+'\t'+alunos[i])
    notas[i] = leia("Digite a nota do aluno : ")
}
console.log("MAT\tALUNO\tNOTA")
console.log("---------------------------------------------")
for(let i=0; i<matriculas.length; i++){
    if(notas[i]>5){
        situacao = 'APROVADO'
    }
    else {
        situacao = 'REC'
    }
    console.log(matriculas[i]+'\t'+alunos[i]+'\t'+notas[i]+'\t'+situacao)
}
console.log("---------------------------------------------")
console.log("ALTERAÇÃO DE DADOS")
let matricula = leia("Digite a matricula do  aluno deseja troca a nota : ")
for(let i=0; i<matriculas.length; i++){
    if(matricula == matriculas[i]){
        console.log(alunos[i]+" nota atual: "+notas[i])
        notas[i] = leia("Digite a nova nota do aluno : ")
    }
}
console.log("---------------------------------------------")
for(let i=0; i<matriculas.length; i++){
    if(notas[i]>5){
        situacao = 'APROVADO'
    }
    else {
        situacao = 'REC'
    }
    console.log(matriculas[i]+'\t'+alunos[i]+'\t'+notas[i]+'\t'+situacao)
}
console.log("---------------------------------------------")