const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    channelName:{
        type:String,
        required:true,
    },
    userName:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    },
    about:{
        type:String,
    },
    profilePic:{
        type:String,
        required:true,
    },
},{timestamps:true})   //help to add the filen created at and updated at time 

module.exports = mongoose.model('user',userSchema);