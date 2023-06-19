const leia = require("prompt-sync")()

let alunos = ["MARIA","PEDRO","JOSE"]
let notas = [0,0,0]

console.log(alunos)
console.log(alunos[2])
console.log(alunos[0])
for(let x=0; x<3; x++){
    console.log(x+" - "+alunos[x])
}