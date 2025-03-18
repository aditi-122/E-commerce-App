const jwt = require("jsonwebtoken");
const jwt_key = process.env.JWT_KEY;
const authMw = async(req,res)=>{
    try {
        let token = req.headers?.authorization?.split("")[1];
        if(!token){
            res.status(403).json({msg:'token missing'});
        }
        else{
            var decoded = jwt.verify(token, jwt_key);
        }
        if(decoded){
            req.body.userId = decoded.userId;
            next();
        }
        else{
            res.status(403).json({msg:"permission denied"});
        }
    } catch (error) {
        console.log(err);
        res.status(500).json({msg:"error occured"});
    }
}
module.exports = authMw;