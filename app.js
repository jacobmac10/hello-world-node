//libreria http de node.js
const http = require('http');

// host: loopback address
const hostname = '127.0.0.1';

// node.js default port
const port = 3000;

//function
const f = function (){

}

//ECMAAScript 6 function
const f2 = () => {

}
//ejemplo
() => {}


const server = http.createServer((req, res) => {
    //ok 
    res.statusCode = 200;
    //set contetn mimetypw,, un identificador en interten deoendiendo de su contnido plain text.
    res.setHeader('content-Type', 'text/plain');

    res.end('hello world!');

});
server.listen(port,hostname,() => {
    console.log(`server running at http://${hostname}:${port}`);
});