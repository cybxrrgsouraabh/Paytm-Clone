const JWT_SECRET = require("../config")
const jwt = require('jsonwebtoken')


function userJWTMiddleware(req, res, next){

    const fullJWT = req.headers.authorization;
    const splitToken = fullJWT.split(" ");
    const Token = splitToken[1];
    console.log(fullJWT);
    console.log(splitToken);
    console.log(Token);
    const verified = jwt.verify(Token, JWT_SECRET);
    console.log(verified.userId)
    if(verified.userId){
        req.userId = verified.userId;
        next();
    }else{
        res.json({
            msg: "invalid Authentication"
        })
    }


} 

module.exports = userJWTMiddleware;