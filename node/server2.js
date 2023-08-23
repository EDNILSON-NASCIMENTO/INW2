const {createServer} = require('http')

let server = createServer((request,response)=>{
    response.writeHead(200,{"Content-Type":"text/html"});
    response.write(`
        <h1>Hello World 2</h1>
        <p>Pagina html usando node.js</p>
    `);
    response.end();
})

const port = 8000;
server.listen(port,()=>{
    console.log(`Usando a porta ${port} na url http://localhost:${port}`)
})

