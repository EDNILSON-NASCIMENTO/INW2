function nomeComIdade(nome, idade){
    if(idade === undefined){
        console.log('Seu nome é '+nome)
    }
    else{
        console.log(`O seu nome é ${nome}, e você tem ${idade}`)
    }
}
nomeComIdade("Epaminondas")

function repetirFrase(frase,n=5){
    for(let x=1; x<=n; x++){
        console.log(frase + " "+ x)
    }
}

repetirFrase("Cuidado, esse assunto é importante!!!",2)


