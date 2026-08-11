//Building a simple local server using http module

const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req,res)=>{
    if(req.url === '/' && req.method === 'GET'){
        fs.readFile(path.join(__dirname,'index.html'),(err,data)=>{
            if(err){
                res.writeHead(500, { 'Content-Type': 'text/html' }); 
                res.write('<h1>Error : File Fetch </h1>');
                res.end();

            }
            else{
                res.writeHead(200, { 'Content-Type': 'text/html' }); 
                res.write(data);
                res.end();

            }

        })
     
    }
    else if(req.url === '/styles.css'){
        fs.readFile('./styles.css',(err,data)=>{
            if(err){
                res.writeHead(500, { 'Content-Type': 'text/css' }); 
                res.write('<h1>Error : File Fetch </h1>');
                res.end();

            }
            else{
                res.writeHead(200, { 'Content-Type': 'text/css' }); 

                res.write(data);
                res.end();

            }
            
        })
        
    }
    else if(req.url === '/workPic.png' && req.method === 'GET'){
        fs.readFile('./workPic.png',(err,data)=>{
            if(err){
                res.writeHead(500, { 'Content-Type': 'text/html' }); 

                res.write('<h1>Error : File Fetch </h1>');
                res.end();

            }
            else{
                res.writeHead(200, { 'Content-Type': 'image/png' }); 

                res.write(data);
                res.end();

            }
            
        })
      
    }

    else if(req.url === '/script.js' && req.method === 'GET'){
        fs.readFile('./script.js',(err,data)=>{
            if(err){
                res.writeHead(500, { 'Content-Type': 'text/html' }); 

                res.write('<h1>Error : File Fetch </h1>');
                res.end();

            }
            else{
                res.writeHead(200, { 'Content-Type': 'text/javascript' }); 

                res.write(data);
                res.end();

            }
            
        })
      
    }

    else{
        res.writeHead(404, { 'Content-Type': 'text/html' }); 
        res.write('<h1>Page not Found</h1>');
        res.end();

    }


});

// server.on('connection', (socket) => {
//     console.log(socket.remoteAddress);
//     console.log("Connection established...");
// });

// server.on('request', (req, res) => {

//     console.log(req.url,req.method);
//     // rootroute ----'/'
//     if(req.url === '/')

//     //writeHead() method is used to send a response header to the request.
//     res.writeHead(200, { 'Content-Type': 'text/plain' }); //status code 200 means OK
//     //write() method is used to send a response body to the request.
//     res.write('Hello World\n');
//     //end() method is used to signal to the server that all of the response headers and body have been sent.
//     res.end();
// });

//The PortBurner is a simple Node.js application that creates a local server using the http module.
server.listen(3000, () => {
    console.log('Server is listening on port 3000...');
});


// Homewok. Create a icon ——‘.ico’
// we create a login form and send a data from client side to server side
