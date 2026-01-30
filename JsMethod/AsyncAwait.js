function login() {
    return new Promise((resolve,reject)=> {
        setTimeout(() => {
            console.log("login");
            resolve();
        },2000);
    })
}

function userDetail() {
    return new Promise((resolve,reject)=> {
        setTimeout(()=> {
            console.log("userDetail");
            resolve();
        },1000);
    })
}

function logout() {
    return new Promise((resolve,reject)=> {
        setTimeout(()=> {
            console.log("logout");
            resolve();
        },4000);
    })
}

async function demo() {
    try {
        await login();
        await userDetail();
    }
    catch(error) {
        console.log("error",error); 
    }
    console.log("all task done");
    
}

async function demo1() {
    try {
        await logout();
    } catch (error) {
        console.log("error",error);
    }
    console.log("all task done");
}

demo();
demo1();