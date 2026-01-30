// callback -> a function passed to another function
// function fun() {       
//     console.log("Hello");   // callback function
// }

const fun = () => {
    console.log("hello");
}

function save(cb) {
    console.log("save function");     // Higher order function
    cb();
}

save (()=> {
    console.log('hello');
})

// save(fun);

let arr = [1,2,3,4,5];
function printArrayEle(element) {
    console.log(element);
}
arr.forEach(printArrayEle);   // forEach is a higher order function and printArrayEle is a callback function.

arr.forEach((x)=> {
    console.log(x);     // using anonymous function as callback
})