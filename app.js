const express = require('express') ; //returns a function

const app = express() ; //calling the function stored in express


app.listen(3000 ) ;


app.get('/' , (req , res) => {

  //  res.send('<p> home page </p>') ; //infers the statuscode and the header
res.sendFile('./views/index.html' ,{root: __dirname}) ;
}) ;


app.get('/about' , (req , res) => {

    //  res.send('<p> home page </p>') ; //infers the statuscode and the header
  res.sendFile('./views/about.html' ,{root: __dirname}) ;
  }) ;

app.get('/about-me' , (req , res) => {
    res.redirect('/about') ; 

}) ; 

app.use((req , res) => {//must be placed down
    res.status(404).sendFile('./views/404.html' , {root: __dirname}) ; // another argument when we use a relative path

} );