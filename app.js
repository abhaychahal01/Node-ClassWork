//Building a simple local server using http module

const http = require('http');

const server = http.createServer((req,res)=>{
    if(req.url === '/' && req.method === 'GET'){
        res.writeHead(200, { 'Content-Type': 'text/plain' }); 
        res.write('Hello World\n');
        res.end();
    }
    else if(req.url === '/about'){
        res.writeHead(200, { 'Content-Type': 'text/html' }); 
        res.write('<h1>About Us Page</h1>');
        res.end();
        
    }
    else if(req.url === '/abhay' && req.method === 'GET'){
        res.writeHead(200, { 'Content-Type': 'applicaton/json' }); 
        res.write({'message' : 'Welcome Abhay'});
        res.end();
        
    }

    else{
        res.writeHead(404, { 'Content-Type': 'text/html' }); 
        res.write('<h1>Page not Found</h1>');
        res.end();

    }


});

server.on('connection', (socket) => {
    console.log(socket.remoteAddress);
    console.log("Connection established...");
});

server.on('request', (req, res) => {

    console.log(req.url,req.method);
    // rootroute ----'/'
    if(req.url === '/')

    //writeHead() method is used to send a response header to the request.
    res.writeHead(200, { 'Content-Type': 'text/plain' }); //status code 200 means OK
    //write() method is used to send a response body to the request.
    res.write('Hello World\n');
    //end() method is used to signal to the server that all of the response headers and body have been sent.
    res.end();
});

//The PortBurner is a simple Node.js application that creates a local server using the http module.
server.listen(3000, () => {
    console.log('Server is listening on port 3000...');
});