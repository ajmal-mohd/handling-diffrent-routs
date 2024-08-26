
// const http = require("http");

// // Complete a challenge Extend the server to handle different routes.git

//  const server= http.createServer((req,res)=>{

//     if(req.url==="/"){
       
//         res.writeHead(200,{'Content-type':'text/html'})
//         res.end("welcome my home oage")

//     }

//     if(req.url==="/contact"){
//         res.writeHead(200,{'Content-type':'text/html'})
//         res.end(" hello contact")
//     }

//     if(req.url==="/about"){
//         res.writeHead(200,{'Content-type':'text/.html'})
//         res.end("hello about")
//     }


//  })


//  const port= process.env.PORT||3001;


//  server.listen(port,()=>{
    

//     console.log("running on server");
//  })






const http= require("http")
const path= require("path")
const fs =require("fs")

  this is / shlash page


fs.mkdir(path.join(__dirname,"/view"),{},(err)=>{
   
    if(err) throw err;
    console.log("folder created")
})

fs.writeFile(path.join(__dirname,"view","index.html"),"/  : this is my page hash page",{},(err)=>{
    if(err) throw err;

})


this this is my aboutepage createCode


fs.mkdir(path.join(__dirname,"about"),{},(err)=>{
    if(err) throw err;
    console.log("folder created")

})


fs.writeFile(path.join(__dirname,"about","about.html"),"welcome my about page",{},(err)=>{

    if(err) throw err;
    console.log('succussFully writed');
})



create conatct folder valus addedd


fs.mkdir(path.join(__dirname,"conatct"),{},(err)=>{
    if(err) throw err;
    console.log("contact folder created")
})


fs.writeFile(path.join(__dirname,"/conatct","index.html"),"welcome my contact page",{},(err)=>{
    if(err) throw err;
    console.log("values added contact")
})