// declared function
function demo() {
    console.log("this is demo");
}

exports.fun = function(){
    console.log("this is function expression");
}

exports.serve = () => {
    console.log("this is an arrow function");
}