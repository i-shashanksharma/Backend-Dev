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

login()
    .then(() => {
        return userDetail();
    })

    .then(() => {
        console.log("all task done");
    }) .catch(() => {
        console.log("error");
    })