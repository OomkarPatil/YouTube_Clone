const Vid = require('../Modals/video.js');



exports.UpldVid = async(req,res)=>{
    try{

        const { title, description, videoLnk, thumbnail, videoTyp } = req.body;
        const VidUpload = new Vid({ user: req.user._id, title, description, videoLnk, thumbnail, videoTyp});
        await VidUpload.save();

        res.status(201).json({ success:"true", VidUpload});

    }catch(error){
        res.status(500).json({ error:'server Error!'});
    }
}



exports.GetAllVid = async(req,res)=>{
    try{
        const Videos = await Vid.find().populate('user','channelName profilePic userName createdAt');

        res.status(201).json({ success:"true", "videos": Videos });
    }catch(error){
        res.status(500).json({ error:'server Error!'});
    }
};


exports.GetVidByID = async(req,res)=>{
    try{
        let {id} = req.params;
        const video = await Vid.findById(id).populate('user','channelName profilePic userName createdAt');
        res.status(201).json({ success:'true', "video": video });

    }catch(error){
        res.status(500).json({ error:'server Error!'});
    }
};

exports.GetMEDIAByUserID = async(req,res)=>{
    try{
        let {userId} = req.params;
        const video = await Vid.find({ user:userId }).populate('user','channelName profilePic userName createdAt');
      
        res.status(201).json({ success:'true', "video": video });

    }catch(error){
        res.status(500).json({ error:'server Error!'});
    }
};
