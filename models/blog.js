const mongoose = require('mongoose') ;
const Schema = mongoose.Schema ;

//make the schema
const blogSchema = new Schema({
    title: {
        type: String , 
        required:true 
    } , 
    snippet: {
        type: String , 
        required: true
    } ,
    body: {
        type: String , 
        required:true
    }
} , {timestamps: true}); 

//make the model
const Blog = mongoose.model('Blog' , blogSchema) //it will automaticall pluralize the argument blog and look for the collection blogs

module.exports = Blog ; //export it to use it elsewhere
