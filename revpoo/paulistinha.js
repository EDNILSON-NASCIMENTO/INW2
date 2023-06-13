const leia = require("prompt-sync")()
//arrays ou vetores
let equipes = ['SFC','SPFC','SCCP','SEP']
let pontos = [0,0,0,0]

for(let x=0; x<equipes.length; x++){
    console.log(equipes[x])
    pontos[x] = parseInt(leia("Digite quantos pontos : "))
}

console.log("TABELA")
console.log("TIME\tPONTOS")
for(let x=0; x<equipes.length; x++){
    console.log(equipes[x]+'\t'+pontos[x])
}













