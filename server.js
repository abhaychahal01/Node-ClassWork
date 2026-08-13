const http = require('http');

const server = http.createServer((req,res)=>{
    res.setHeader('Access-Control-Allow-Origin','http://127.0.0.1.3000');
    res.setHeader('Access-Control-Allow-Methods','GET,POST,OPTIONS');
    res.setHeader('Access-Control-Allow-Headers','Content-Type');


    const baseURL = `http://${req.headers.host||localhost}`;
    const parsedURL = new URL(req.url,baseURL);
    const pathname = parsedURL.pathname;
    if(pathname === '/' && req.method === 'GET'){
        console.log(parsedURL.searchParams);
        res.writeHead(200,{'Content-Type':'text/plain'})
        res.write("User LoggedIN");
        res.end();
    }
    else{
        res.writeHead(500,{'Content-Type':'text/plain'})
        res.write("Internal Server Error");
        res.end();

    }



    console.log(req.url);

});

server.listen(3000,()=>{
    console.log("Server Listening on port 3000...");
})