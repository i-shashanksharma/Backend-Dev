import express from "express"

const router = express.Router();

router.get("/profile",(req,res)=> {
    res.send("David");
})

router.get("/report",(req,res)=> {
    res.send("Student");
})

export default router;