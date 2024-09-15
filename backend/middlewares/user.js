const JWT_SECRET = require("../config")
const jwt = require('jsonwebtoken')


function authMiddleware(req, res, next){

    const fullJWT = req.headers.authorization;
    const splitToken = fullJWT.split(" ");
    const Token = splitToken[1];
    
    const verified = jwt.verify(Token, JWT_SECRET);

    if(verified.userId){
        req.userId = verified.userId;
        next();
    }else{
        res.json({
            msg: "invalid Authentication"
        })
    }


} 

module.exports = authMiddleware;