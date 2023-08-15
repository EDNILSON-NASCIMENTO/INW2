const leia = require("prompt-sync")()

let opcao=""
let opcaoVetor=""

let cod = ["C1","C2","C3"]
let descricao = ["Camisa", "Saia", "Calça"]
let valor = [100.00, 55.00, 150.50]
let estoque = [0,0,0]

//primeiro menu
while(opcao != "2"){
    opcaoVetor=""
    console.log("LOJA XXX\n\n")
    console.log("1 - OPÇÕES\n2 - SAIR")
    opcao = leia("Digite o numero da opcão desejada : ")
    if(opcao=="1"){
        while(opcaoVetor!=4){
            console.log("Menu de opções")
            console.log("1 - Mostra dados")
            console.log("2 - Alterar dados")
            console.log("3 - Excluir dados")
            console.log("4 - sair")
            opcaoVetor=leia("Digite a opção desejada: ");
            if(opcaoVetor=="1"){
                console.log("COD\tDESCRICAO\tVALOR\tQTDE")
                for (let x = 0; x<cod.length; x++){
                    console.log(cod[x]+"\t"+descricao[x]+"\t"+valor[x]+"\t"+estoque[x])
                }
            }
        }
        
    }
}
console.log("\nObrigado por utilizar nossos serviços!") 


