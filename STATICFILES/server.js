// import express from "express";
// const app = express();

// app.use(express.static('public'));
// app.use("/static",express.static('public'));

// const port = 3000;
// app.get("/",(req,res)=> {
//     res.send("Server is Running");
// })

// app.listen(port,()=> {
//     console.log("server is running");
// })


import express from 'express';
import path from 'path';
import {fileURLToPath} from 'url'
const app=express();

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename);

const filepath = path.join(__dirname,"public")

//http://localhost:3000/static/img1.jpg
app.use("/static",express.static(filepath));

const port=3000;
app.get("/",(req,res)=>{
    res.send("Server is Running");
})

app.listen(port,()=>{
    console.log("server is running")
})