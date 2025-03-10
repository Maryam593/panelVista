import 'dotenv/config'
import mongoose from "mongoose";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
const key = process.env.SECRET_KEY

const userSchema = new mongoose.Schema({
    FullName: {
        firstName:{type:String, require:true},
        lastName : {type:String}
    },
    email:{type:String, require:true, unique : true},
    password : {type:String,require:true,select:false}
})

userSchema.methods.generateJWT = function() {
    const token = jwt.sign({id:this._id},key, {expiresIn:"24h"})
    return token
}
userSchema.methods.comparePassword = async function(password){
    const comparePassword = await bcrypt.compare(password, this.password)
    return comparePassword
}
userSchema.statics.hashpassword = async function (password){
    const hashPass = await bcrypt.hash(password,10)
    return hashPass
}

const UserAuthModel = mongoose.model("User Authentication", userSchema);
export default UserAuthModel;