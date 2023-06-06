const leia = require("prompt-sync")()
/*
//LEIA O NOME DO USUÁRIO
//LER O SALARIO DO USUÁRIO
//SE O SALARIO FOR MENOR 2500 A PESSOA É ISENTA
// SE O SALARIO FOR ACIMA  2500 E MENOR IGUAL A 5000
// PAGA IMPOSTO DE 15% - MOSTRA IMPOSTO E SALARIO LIQUIDO
// SE O SALARIO FOR ACIMA DE 5000 PAGA IMPOSTO DE 25%
// MOSTRA SALARIO LIQUIDO E IMPOSTO A PAGA
*/
//VARIAVEIS
let usuario
let salario
let valorImposto

//ENTRADAS
usuario = leia("Digite o nome do usuário : ")
salario = parseFloat(leia("Digite o valor do salário : "))

if(salario <= 2500){
    console.log(usuario + " você é isento!!!")
}
else if(salario > 2500 && salario <= 5000){
    valorImposto = salario * 0.15
    console.log("Oi Sr."+usuario+" seu imposto é "+valorImposto)
    console.log("Seu salario liquido é "+(salario-valorImposto))
}
else {
    valorImposto = salario * 0.25
    console.log("Oi Sr."+usuario+" seu imposto é "+valorImposto)
    console.log("Seu salario liquido é "+(salario-valorImposto))
}

//fim de programa
console.log("Fim de programa")