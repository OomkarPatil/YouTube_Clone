const mongoose = require("mongoose");

const videoSchema = new mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'user',
        required:true,
    },
    title:{
        type:String,
        required:true,
    },
    description:{
        type:String,
    }
    ,
    videoLnk:{
        type:String,
        required:true,
    },
    thumbnail:{
        type:String,
        required:true,
    },
    videoTyp:{
        type:String,
        default:"All"
    },
    like:{
        type:Number,
        default:0
    },
    dislike:{
        type:Number,
        default:0
    },

},{timestamps:true});    //help to add the filen created at and updated at time 

module.exports = mongoose.model('video',videoSchema);   //creating the model for the video schema


