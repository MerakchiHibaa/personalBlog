const express = require('express') ; //returns a function
const morgan = require('morgan');
const mongoose = require('mongoose') ; 
//const Blog = require('./models/blog');
const { render } = require('express/lib/response');
const blogRoutes = require('./routes/blogRoutes');

const app = express() ; //calling the function stored in express
//connect to mongodb 
const dbuRI = 'mongodb+srv://hiba:hiba123@cluster0.cetez.mongodb.net/node-tuts?retryWrites=true&w=majority' ;

mongoose.connect(dbuRI , {useNewUrlParser: true , useUnifiedTopology: true}) 
.then((result) => 
app.listen(3000 ) )
    .catch((err) => console.log(err)) ;
//register view engine
 app.set('view engine' , 'ejs') ; 




//app.use(morgan('tiny')) ; // another format to the info of the request

//middleware and static files (images, css...)

app.use(express.static('public')) ; //the folders name 

app.use(express.urlencoded({extended: true})) ; //takes the url encoded data and passes it to an ovject that we can use

app.use(morgan('dev')) ; //format info about the request

//mongoose and mongo sandbox routes
app.use((req, res, next) => {
  res.locals.path = req.path;
  next();
});



app.get('/' , (req , res) => {

  res.redirect('/blogs') ; 
//  res.send('<p> home page </p>') ; //infers the statuscode and the header
//res.sendFile('./views/index.html' ,{root: __dirname}) ;

}) ;

app.get('/add-blog' , (req , res) => {
   
    const blog = new Blog({
        title: 'new blog' , 
        snippet: 'about my new blog' , 
        body:'more about my new blog'
    }) ; 
    blog.save() 
    .then((result) => {
        res.send(result);
    })
    .catch((err) => {console.log(err);
     }) ;
    
}) ;

app.get('/all-blogs' , (req , res) => {
   Blog.find() 
    .then((result) => {
        res.send(result);
    })
    .catch((err) => {console.log(err);
     }) ;
    
}) ; 


/* app.get('/single-blog' , (req , res) => {
    Blog.findById("61bfbeea90b0514515d6cd24") 
     .then((result) => {
         res.send(result);
     })
     .catch((err) => {console.log(err);
      }) ;
     
 }) ;  */








app.get('/about' , (req , res) => {

   
    //  res.send('<p> home page </p>') ; //infers the statuscode and the header
 
    // res.sendFile('./views/about.html' ,{root: __dirname}) ;
res.render('about' , {title: 'About' }) ;  
}) ;

/* app.get('/about-me' , (req , res) => {
    res.redirect('/about') ; 

}) ;  */


//blog routes

app.use('/blogs' , blogRoutes) ; 

 
app.use((req , res) => {//must be placed down
   // res.status(404).sendFile('./views/404.html' , {root: __dirname}) ; // another argument when we use a relative path
res.status(404).render('404' , {title:'404'}) ;
} );


