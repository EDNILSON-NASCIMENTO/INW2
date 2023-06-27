//como ler do teclado
const leia = require("prompt-sync")()
//criandos os vetores
let codigo = ['GRP0X-01','GRP0X-02','GRP0X-03','GRP0X-04','GRP0X-05','GRP0X-06','GRP0X-07','GRP0X-08','GRP0X-09','GRP0X-10']
let produto = ['BONÉ             ','CALÇA            ','BERMUDA AFRO     ','BATA             ',
    'CAMISA AFRO      ','SAIA RODADA      ','SAIA STYLE       ','MACACÃO          ',
    'CAMISETA TEMATICA','CALÇA SOCIAL AFRO'
]
let valor = [100.00,150.00,90.00,140.00,150.,00,90.00,90.00,150.00,100.00,95.50]
let estoque = [10,10,10,10,10,10,10,10,10,10]
let continua = "S"
let carrinho = [0,0,0,0,0,0,0,0,0,0]

//laço principal
do {
    
    console.log("COD\t\tDESCRIÇÃO\t\tVALOR\tQTDE")
    for(let x=0; x<produto.length; x++){
        console.log(codigo[x]+"\t"+produto[x]+"\t"+valor[x]+"\t"+estoque[x])

    }
    let auxCod = leia("Digite o codigo do produto para compra : ")
    for(let x=0; x<produto.length; x++){
        if(auxCod==codigo[x]){
            console.log("PRODUTO SELECIONADO:")
            console.log(codigo[x]+"\t"+produto[x]+"\t"+valor[x]+"\t"+estoque[x])
            carrinho[x] = leia("Digite a quantidade que deseja compra : ")
            console.log("Sub-total : "+(valor[x]*carrinho[x]))
        }
    }
    console.log("CARRINHO DE COMPRAS")
    console.log("COD\t\tDESCRIÇÃO\t\tVALOR\tQTDE\tQTDE COMPRADA")
    let subtotal = 0
    for(let x=0; x<produto.length; x++){
        
        if(carrinho[x]>0){
            console.log(codigo[x]+"\t"+produto[x]+"\t"+valor[x]+"\t"+estoque[x]+"\t"+carrinho[x])
            subtotal = subtotal + (valor[x]*carrinho[x]) 
        }
    }
    console.log("Valor da compra : "+subtotal)
    continua = leia("Continua Sim ou Não [S/N] ? ").toUpperCase()
}while(continua != "N")
console.log("Fim de programa, até breve!!!")
