import express from "express"

const router = express.Router();

let loginValidation = (req,res,next) => {                 
    const token = req.query.token;
    console.log(typeof(token));
    
    if(token=="admin123") {
        next();
    }
    else {
        res.send("Access Denied");
    }
}

// router.use(loginValidation);




router.get("/login",loginValidation,(req,res)=> {
    res.send("login route");
})

router.get("/signup",(req,res)=> {
    res.send("sign up route");
})

export default router;