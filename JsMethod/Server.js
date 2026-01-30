// const {fun,serve} = require('./method')

// fun()
// serve()

// const { add, sub, mul, div } = require('./cal');  // common js type
// import { add,sub,mul,div } from "./cal.js";  // module type
// console.log(add(2,5));  
// console.log(sub(5,2));  
// console.log(mul(5,2)); 
// console.log(div(6,5)); 

//fs
//os
//http

const os = require('os');
// console.log(os);
console.log(os.arch())
console.log(os.freemem()/(1024**3));
console.log(os.uptime());
console.log("Total memory",os.totalmem()/(1024**3));
