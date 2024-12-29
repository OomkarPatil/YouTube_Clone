const User = require('../Modals/user.js');
const bcrypt = require('bcryptjs');
const JWT = require('jsonwebtoken');

const cookieOpt = {
    httpOnly:true,
    secure:false,      //set to true in production
    sameSite: 'Lax'
}

exports.signUp = async(req,res)=>{
    try {
        const{ channelName, userName, email, profilePic, password } = req.body;
        const isExist = await User.findOne({ email, userName });   //checking if the username already exists or not
        
        if(isExist){
            res.status(400).json({ 
                error: "Already exists an account with this email"
            })
        }else{
            let encryptPass = await bcrypt.hash(password, 10);
            const user = new User({channelName, userName, email, profilePic, password:encryptPass });
            await user.save();
            console.log(user);
            res.status(201).json({
                 message:"Regisered successfully", success:"OK", data:user
            })
        }

    } catch (error) {
        res.status(500).json({
            error: "server Error"
        });
    }
};

exports.signIn = async (req,res)=>{
    try{
        const { email, password } = req.body;
        const user = await User.findOne({ email });        //checking if the username already exists or not

        if(user && await bcrypt.compare(password, user.password)){

            const token = JWT.sign( {userId: user._id }, 'Secret_Key');
            res.cookie('token',token, cookieOpt);                                          //saving the token key in cookie
            res.json({ message:'Logged in Successfully', success:"true", token, user});
        }else{
            res.status(400).json({ error: 'invalid Credetials'});
        }

    }catch (error) {
        res.status(500).json({
            error: "server Error"
        });
    }
};

exports.logOut = async (req, res)=>{
    res.clearCookie('token', cookieOpt).json({
        message:"Logged Out Successfully"
    });
};