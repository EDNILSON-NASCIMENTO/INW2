const url = "http://localhost:3000/produtos"

fetch(url)
.then((req) => req.json())
.then((data) => mostraProdutos(data));


function mostraProdutos(produtos){
    const htmlProdutos = produtos.map(
        (produto) =>`
        <img src=${produto.imagem} witdh=100 height=100><br>
        <h4>${produto.descricao}</h4>
        <h4>Valor : ${produto.valor}</h4>`
    );
    document.getElementById("app").innerHTML = htmlProdutos;
}