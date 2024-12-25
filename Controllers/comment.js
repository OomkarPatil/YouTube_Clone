const CMT = require('../Modals/comments.js');


//since we need to first verify if teh user is login ornot so well send the authincation as a middleware
exports.AddCmt = async(req,res)=>{
    try{
        let{ video, message } = req.body;
        const comment = new CMT({ user: req.user._id, video, message });
        await comment.save();

        res.status(201).json({
            message:"OK",
            comment
        });

    }catch(error){
        res.status(500).json({ error:'server Error!'});
    }
};

exports.getCmtByVidID = async(req,res)=>{
    try{
        let { videoid } = req.params;
        const comments = await CMT.find({ video: videoid }).populate('user','channelName profilePic userName createdAt');

        res.status(201).json({
            message:"OK",
            comments
        });

    }catch(error){
        res.status(500).json({ error:'server Error!'});
    }
};