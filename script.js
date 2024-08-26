
const http = require("http");

// Complete a challenge Extend the server to handle different routes.git

 const server= http.createServer((req,res)=>{

    if(req.url==="/"){
       
        res.writeHead(200,{'Content-type':'text/html'})
        res.end("welcome my home oage")

    }

    if(req.url==="/contact"){
        res.writeHead(200,{'Content-type':'text/html'})
        res.end(" hello contact")
    }

    if(req.url==="/about"){
        res.writeHead(200,{'Content-type':'text/.html'})
        res.end("hello about")
    }


 })


 const port= process.env.PORT||3001;


 server.listen(port,()=>{
    

    console.log("running on server");
 })

