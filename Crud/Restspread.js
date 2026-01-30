// Rest spread operator

const emp = {
    id:1,
    name:"ram",
    salary:"123456",
    address:"delhi",
    age:25,
    department:"HR"
}

const empCopy = {...emp}  //// SPREAD

const {id,name,salary,...otherInfo} = emp;     // REST
console.log(otherInfo);

// console.log(empCopy);

// update the address
// emp.address = "mumbai";
// console.log(emp.address);

let updateemp = {...emp, address:"bangalore"}
console.log(updateemp);
