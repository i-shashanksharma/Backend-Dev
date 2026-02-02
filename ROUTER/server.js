import express from 'express';
import userRoute from "./router/useRoute.js";
import registrationRoutes from "./router/registrationRoutes.js"
import dashBoard from "./router/dashBoard.js";

const port = 3000;

const app = express();

// app.get("/",(req,res)=> {
//     res.send("server is running");
// })

// app.get("/user",(req,res)=> {
//     res.send("user route");
// })

app.use("/api", userRoute);

app.use("/registration", registrationRoutes);

app.use("/dashboard", dashBoard);


app.listen(port,()=> {
    console.log("server is running on port " + port);
})