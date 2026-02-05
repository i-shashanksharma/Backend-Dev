import express from 'express';

const app = express();

app.set("view engine", "ejs")

app.get("/",(req,res)=> {
    res.render("index");
})

let userData = [
    {id: 1, name: "Amrit",age: "24"},
    {id: 2, name: "Rahul",age: "35"},
    {id: 3, name: "Rakesh",age: "30"},
];

// app.get("/user",(req,res)=> {
//     let userData = {
//         name: "Amrit",
//         age: "23"
//     }
//     res.render("user", {userData})
// })

app.get("/user", (req,res)=> {
    res.render("user", {userData});
});

app.use(express.urlencoded({extended:true}))    // Middlewar

app.post("/api/user", (req,res)=> {

    const {name,age} = req.body;

    let newuserData = {
        id: userData.length+1,
        name,
        age
    }
    userData.push(newuserData);
    res.redirect('/user');
})

app.get("/api/user/:id",(req,res)=> {
    const userid = req.params.id;

    const useridx = userData.findIndex((ele)=> ele.id==userid);
    
    if(useridx == -1) {
        return res.send("User Not Found");
    }

    userData.splice(useridx,1);

    res.redirect("/user");
})

app.get("/list",(req,res)=> {

    let arr = ["apple","mango","orange"];

    // let arr = [];
 
    res.render("list",{arr})
})

app.listen(3000,()=> {
    console.log("server is running");
})
