/* setTimeout(() => {
    console.log('in the timout')
    clearInterval(int) ;
    
}, 3000);

 const int = setInterval(() => {
    console.log('in the interval')

} , 1000) ; 


console.log(__dirname) ; 
console.log(__filename) ;

*/

const people = ['hiba' , 'lina' , 'ferial' , 'lydia'] ;
const ages = [ 12 , 13 , 15 , 19] ; 
//manually export a value that will be assigned to s
module.exports = 'hello' ;
module.exports = { 
     people , //sets a property people to the value of people the same name
     ages
}  