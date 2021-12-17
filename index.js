
/* const {people , ages} = require('./test') ; 

 console.log(s.people , s.ages) ; 

const os = require('os') ; 
console.log(os.platform() , os.homedir()) ;
 */

//reading files
const fs = require('fs') ; 
//async function doesnt block
/* fs.readFile('./docs/blog.txt' , (err, data) => {
    if(err) {
        console.log(err) ;
    }
    console.log(data.toString());

}) ;


console.log('last line'); */
//writing files
/* fs.writeFile('./docs/blog.txt' , 'Im learning node' , () => {
    console.log('file was written') ;
}) ;

fs.writeFile('./docs/blog2.txt' , 'Im learning node' , () => {
    console.log('file was written') ;
}) ; */


//directories
/* if(!fs.existsSync('./assets')) 
{
    fs.mkdir('./assets' , (e)=> {
        if(e) {
            console.log(e) ;
        }
        console.log('folder created') ;
    
    }) ; 
    
}
else{
    fs.rmdir('./assets' , (err)=> {
        if(err) {
            console.log(err) ; 


        }
console.log('folder deleted') ; 
    })
}
 */
//deleting files
/* 
if (fs.existsSync('./docs/deleteme.txt')) {
    fs.unlink('./docs/deleteme.txt' , (err) => {
        if(err) {
            console.log(err) ;
        }
        console.log('file deleted') ; 
    })

} */


//streams

const readstream = fs.createReadStream('./docs/blog.txt' , {encoding :'utf8'}) ; 
/* readstream.on('data' , (chunk) => {
    
    console.log(chunk) ;
}) */

const writestream = fs.createWriteStream('./docs/blog4') ; 

/* writestream.write('hiba') ;
 */
//pipe used from a readable t a writable stream

readstream.pipe(writestream) ;