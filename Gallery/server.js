import express from 'express';
import fs from 'fs';
const app = express();

app.set("view engine","ejs");
app.use("/static",express.static("public")); 

app.get("/index",(req,res)=> {
    const files = fs.readdirSync("./public");

    // const images = ["img1.png","img2.png","img1.png","img2.png",........];

    // res.render("index",{image:files});

    // res.render("index");

    // pagination
    const page = parseInt(req.query.page) || 1;
    const limit = 10;
    const totalPages = Math.ceil(files.length/limit);

    const startIndex = (page-1)*limit;  // 0
    const endIndex = page*limit;    // 10
    const paginatedFiles = files.slice(startIndex,endIndex);

    res.render("index",{image:paginatedFiles, currentPage:page, totalPages});
})

app.listen(3000,()=>{
    console.log("Server is listening");
})