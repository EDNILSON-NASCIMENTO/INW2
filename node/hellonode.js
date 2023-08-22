const http = require('http')

const server = http.createServer((req, res) =>{
    res.statusCode = 200;
    res.setHeader('Content-Type','text/plain');
    res.end('Hello, Node.JS Server')
});

const port = 3000;
server.listen(port, () =>{
    console.log(`Servidor executando em http://localhost:${port}/`);
})
