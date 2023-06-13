//O USUARIO VAI DIGITAR NUMEROS
// 1- MOSTRAR A SOMA DOS NUMEROS
// 2 - MOSTRAR QUAL FOI O MAIOR NUMERO DIGITADO
// 3 - A QUANTIDADE DE NUMEROS DIGITADOS
// 4 O PROGRAMA PARA DE SOLICITAR NUMEROS QUANDO 
//O USUARIO DIGITAR UM NUMERO NEGATIVO
// O SOMA DOS NUMEROS NÃO DEVER CONSIDERAR O NUMERO NEGATIVO

const leia = require("prompt-sync")()

//variaveis
let numero = 0
let contador = -1
let total = 0
let maiorNumero = 0

do {
    total = total + numero
    if(numero>maiorNumero){
        maiorNumero = numero
    }
    contador++
    numero = parseInt(leia("Digite um numero : "))
    
}while(numero>0)
console.log("Total : "+total)
console.log("Maior numero : "+maiorNumero)
console.log("Quantidade de numeros : "+contador)





