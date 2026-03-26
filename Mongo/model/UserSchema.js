import mongoose from "mongoose";
import bcrypt from "bcrypt";
const userSchema = new mongoose.Schema({
    name:  {
        type: String,
        maxLength:[25,"Name must contain 25 characters only"]
    },
    email: {
        type:String,
        require:true,
        unique:true,
    },
    password: {
        type:String,
        require:true,
        minLength:[8,"Password must contain 8 characters only"]
    },
    role: {
        type:String,
        enum:["user","admin"],
        default:"user"
    }
})


userSchema.pre("save",async function(next) {
    if(!this.isModified("password")) {
        return;
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password,salt);
})

const user = mongoose.model("User",userSchema) 
export default user;
