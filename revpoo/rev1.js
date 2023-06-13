const leia = require("prompt-sync")()

let numero = 0

numero = parseInt(leia("Digite um numero entre 5 e 9 : "))

console.log(numero)
do {
    numero = numero * 3
    console.log(numero)
}while(numero<100)

