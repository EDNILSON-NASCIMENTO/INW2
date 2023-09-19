
//criação da função
function escreverNoConsole(){
    console.log("EScrevendo na tela usando função!!!")
}

//execução da função
escreverNoConsole();

const textoNoConsole = function(){
    console.log("Segundo exemplo, escrevendo no console");
}
textoNoConsole();

const textoPorParametro = function(texto){
    console.log(texto)
}
textoPorParametro("Terceiro exemplo, este texto é o parametro!!!");

const textoUsandoArrow = texto => console.log(texto)
textoUsandoArrow("Quarto exemplo usando arrow function")

//função arrow que recebe um numero e mostra na tela o numero e diz ser é
//par ou impar, negativo ou zerado

const mostrarParImpar = (numero) => {
    if(numero < 0){
        console.log(numero," o numero digitado é negativo")
    }
    else if(numero == 0){
        console.log(numero," o numero digitado é neutro")
    }
    else if ((numero%2)==0){
        console.log(numero," o numero digitado é par")
    }
    else
    {
        console.log(numero," o numero digitado é impar")
    }
}
mostrarParImpar(13)


function escreveLinha(tamanho=80){
    let linha
    for (let x=1; x<=tamanho; x++){
        linha = linha + "-"
    }
    console.log(linha)
}
 escreveLinha(80)
