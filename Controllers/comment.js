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

        res.status(200).json({
            message:"OK",
            comments
        });

    }catch(error){
        res.status(500).json({ error:'server Error!'});
    }
};

exports.updateComment = async (req, res) => {
    const { id } = req.params;   // Extract comment ID from route parameters
    const { message } = req.body;    // Extract updated message from request body
  
    if (!message) {
      return res.status(400).json({ error: "Message content is required" });
    }
  
    try {
      // Find the comment by ID and update it
      const updatedComment = await CMT.findByIdAndUpdate(
        id,
        { message },
        { new: true } // Return the updated document
      );
  
      if (!updatedComment) {
        return res.status(404).json({ error: "Comment not found" });
      }
  
      res.status(200).json({ message: "Comment updated successfully", updatedComment });
    } catch (error) {
      console.error("Error updating comment:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  };