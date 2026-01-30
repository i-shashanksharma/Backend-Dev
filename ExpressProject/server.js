const express = require("express");

const app = express();

app.get("/",(req,res)=> {     ///// THIS IS GET ROUTING
    res.send("hello dev");          /////  THIS IS GET REQUEST
})

app.get("/user",(req,res)=> {    
    res.send("User Route");          
})

app.get("/about",(req,res)=> {    
    res.send("About us");         
})

app.get("/contact",(req,res)=> {     
    res.send("Contact us");          
})

app.get("/Userdetail", (req,res)=> {
    let user = {
        name: "Shashank",
        email: "@qwerty"
    }
    res.status(400).json(user);
});

app.get("/services", (req, res) => {
  res.send("Our Services");
});

app.get("/products", (req, res) => {
  res.send("Product List");
});

app.get("/blog", (req, res) => {
  res.send("Welcome to our Blog");
});

app.get("/faq", (req, res) => {
  res.send("Frequently Asked Questions");
});

app.get("/team", (req, res) => {
  res.send("Meet our Team");
});

app.get("/careers", (req, res) => {
  res.send("Career Opportunities");
});

app.listen(3000,()=> {
    console.log("server is running");
})