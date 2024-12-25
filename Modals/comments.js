const mongoose = require('mongoose');

const cmntSchema = new mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'user',
        required:true,
    },
    video:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'video',
        required:true,
    },
    message:{
        type:String,
        required:true,
    },
},{timestamps:true});    //help to add the filen created at and updated at time 

module.exports = mongoose.model('comments', cmntSchema)
