// fs module
// import fs module

const fs = require("fs"); 

// const read = (err,data)=> {
//     if(err) throw err
//     console.log(data);
// }

// fs.readFile('./log.txt', 'utf-8', read)

console.log("first");   

// fs.readFile('./log.txt', 'utf-8' , (err,data)=> {
//     if(err) throw err
//     console.log(data);
// })

// const data = fs.readFileSync('.log.txt', 'utf-8');
// console.log(data);

// write file

// const data = "this is a new data";
// fs.writeFile('./output.txt', data , (err)=> {
//     if(err) throw err
//     console.log("file write success");
    
// })

fs.appendFile('./output.txt', "\nthis is new text" ,(err)=> {
    if(err) throw err;
    console.log("text is added");
    
})  

// fs.unlinkSync('./output.txt')  // output.txt remove

console.log("end"); 