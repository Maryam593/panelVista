import mongoose from "mongoose";

const userProfileSchema = new mongoose.Schema({
    userId:{
        ref:"User Authentication", type: mongoose.Schema.Types.ObjectId, require:true
    },
    introduction:{
        type : String
    },
    education :{
        type:String
    },
    profileImage : {
        type: String
    },
    socialLinks : {
        instagram:{
            type:String
        },
        facebook:{type:String},
        gitHub:{type:String},
        Reddit:{type:String}
    }
})

const userProfileModel = mongoose.model("UserProfile", userProfileSchema)
export default userProfileModel