const leia = require("prompt-sync")()

let mat = []

mat[0] = "M01"
mat[1] = "M02"
mat[2] = "m03"

let  nomes = ["MARCOS","PEDRO","MARIA"]

let notas = []
notas[0] = 5
notas[1] = 6
notas[2] = 8
let situacao
// let notas = [5, 6, 8]
console.log("MAT\tNOME\tNOTA\tSITUAÇÃO") //MONTAR UM CABEÇALHO
for(let x=0; x<nomes.length; x++){
    if(notas[x]<=5){
        situacao = "REC"
    }
    else {
        situacao = "APROVADO"
    }
    console.log(mat[x]+"\t"+nomes[x]+"\t"+notas[x]+"\t"+situacao)
}
