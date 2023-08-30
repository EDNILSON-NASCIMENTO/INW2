const http = require('http');
const server = http.createServer(function(request, response){
    response.writeHead(200,{"Content-Type":"text/html"});
    if(request.url == "/"){
        response.write("<h1>Página principal ou raiz</h1>")
    }
    else if(request.url == "/login"){
        response.write("<h1>Acesso ao login do projeto</h1>")
    }
    else {
        response.write("A página que você está procurando não existe");
    }
    response.end();
})

const port = 3000;
server.listen(port,()=>{
    console.log(`Servidor rodando na porta ${port}`);
});
