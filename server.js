const http = require('http') ;
const fs = require('fs') ; 
const _ =require('lodash') ; 


const server = http.createServer((request, response) => {
   
    console.log(request.url , request.method) ; 
    //set header content type 
    response.setHeader('Content-Type', 'text/html') ;
   let path = './views/' ; 
    
   switch (request.url) {
       case '/' : 
       path += 'index.html' ;
       response.statusCode = 200 ;

       break ; 
       case '/about' : 
       path += 'about.html' ; 
       response.statusCode = 200 ;

       case '/about-me' : 
       path += 'about.html' ; 
       response.statusCode = 301 ;
       response.setHeader('Location' , '/about');
       response.end() ;

       break ; 
       default : 
       path += '404.html' ; 
       response.statusCode = 404 ;
       break ; 
   }
   // response.write('<p> hello Im learning node </p>') ; //writing the cntent to send to the browser

fs.readFile(path , (err, data) => {
    if (err) {
        console.log(err) ; 
        response.end() ;

    }
    else {
     //   response.write(data) ; 
        response.end(data) ; //if we send one thing
    }
} ) ; 


}) ; //to create a server, callback gonna run each time we send a request to the server, req contains information abt the request like its type and the url

server.listen(3000, 'localhost' , () => {
    console.log('listening for requests on port 3000') ;
}) ; //the port , the host
