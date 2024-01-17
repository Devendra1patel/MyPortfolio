import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:String,
    password:String,
    contact:{
        email:String,
        number:String
    },
    profile_pic:String,
    profile_des_head:String,
    profile_des_body:String,
    banner:String,
    banner_video:String,
    social_link:{
        instagram:String,
        linkedin:String,
        facebook:String,
        freelance:String,
        upwork:String,
        github:String
    }

});
const User = mongoose.model('User', userSchema);
export default User;
