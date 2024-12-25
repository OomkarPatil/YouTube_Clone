const JWT = require('jsonwebtoken');
const User = require('../Modals/user.js');

const auth =  async (req,res, next)=>{
    const tkn = req.cookies.token;
    if(!tkn){
        return res.status(400).json({
            srror:'No token, Access denied'
        });
    }else{
        try{
            const deCoded = JWT.verify(tkn, 'Secret_Key');
            req.user = await User.findById(deCoded.userId).select('-password');
            next();
        }catch(err){
            res.status(401).json({
                error:'Invalid TOKEN!'
            });
        }
    }
}

module.exports = auth;