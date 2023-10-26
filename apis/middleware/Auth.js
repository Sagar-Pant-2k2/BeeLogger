const jwt = require('jsonwebtoken');
const Auth = (req,res,next)=>{
    const token = req.headers.authorization?req.headers.authorization.split(' ')[1]:"";
    if(!token) return res.status(401).json({message:"not valid"});
    try {
        const User = jwt.verify(token,process.env.JWT_SECRET_KEY);
        req.customData = {
            message :"hemlo",
            User
        }
        next();
    }
    catch(err){
        return res.status(401).json({message:"not valid"});
    }
}

module.exports = Auth;