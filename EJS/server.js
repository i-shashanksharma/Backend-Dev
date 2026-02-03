import express from 'express';

const app = express();

app.set("view engine", "ejs")

app.get("/",(req,res)=> {
    res.render("index");
})

app.get("/user",(req,res)=> {
    let userData = {
        name: "Amrit",
        age: "23"
    }
    res.render("user", {userData})
})

app.get("/list",(req,res)=> {

    // let arr = ["apple","mango","orange"];

    let arr = [];
 
    res.render("list",{arr})
})

app.listen(3000,()=> {
    console.log("server is running");
})



















// static server
// csr
// ssr
// template engine
// ejs, pug, hbs
// seo friendly