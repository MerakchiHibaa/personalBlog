 const express = require('express') ; 
 const Blog = require('../models/blog');
 const router = express.Router() ; 

 const blogController = require('../controllers/blogController') ; 



router.get('/create' , blogController.blog_create_get) ;
  
  
  router.get('/' , blogController.blog_index
    
   /*  const blogs = [
        {title:'Yoshi finds eggs' , snippet:'Llsjfshdjsbhfb nbdnfv nbdhfvds nbdfv' },
        {title:'Mario finds eggs' , snippet:'Llsjfshdjsbhfb nbdnfv nbdhfvds nbdfv' } ,
        {title:'How to defeat bowser' , snippet:'Llsjfshdjsbhfb nbdnfv nbdhfvds nbdfv' }
    
    
    ] ;
    res.render('index' , {title : 'Home' , blogs}) ;
  */
  )
  //create a new blog with the info of the request
  router.post('/', blogController.blog_create_post);
  
  
  
  
  
  router.get('/:id', blogController.blog_details);

  
    router.delete('/:id', blogController.blog_delete);
  
    module.exports = router ; 
        