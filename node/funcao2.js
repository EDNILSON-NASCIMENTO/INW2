function somaDois(numero1, numero2){
    return (numero1+numero2);
}
//console.log("O resultado da soma é "+somaDois(5,7))
//console.log("O resultado da soma é ",somaDois(5,7))
const parImpar = (numero) =>{
    if(numero < 0){
        return 'Negativo'
    }
    else if (numero ==0){
        return 'Neutro'
    }
    else if((numero%2)==0){
        return 'Par'
    }
    else {
        return 'Impar'
    }
} 
console.log(parImpar(5))
console.log(parImpar(2))
console.log(parImpar(0))
console.log(parImpar(-1))
