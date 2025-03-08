import mongoose from "mongoose";

const BlackListToken = new mongoose.Schema({
token : {
    type : String,
    require : true,
   unique : true},
createdAt : {
    type : Date,
    default : Date.now,
    expires: 86400
}
})

const BlackListTokenModel = mongoose.model("BlackListToken", BlackListToken)

export default BlackListTokenModel