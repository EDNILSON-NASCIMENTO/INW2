const leia = require("prompt-sync")()

// só os numeros impares
// total desses numeros

let numero
let total = 0

numero = parseInt(leia("Digite um numero inteiro positivo : "))

for(let x=1; x<=numero; x++){
  
    if ((x%2)==1){
        console.log(x)
        total = total + x
    }
  
}
console.log("Total : "+total)
