const express = require("express");
const router = express.Router();
const zod = require("zod");
const {User} = require('/home/cyybxrg/Desktop/webDev Comeback/practise/week8/paytm/backend/db/db')
const userJWTMiddleware = require("../middlewares/user")
const jwt = require("jsonwebtoken");
const JWT_SECRET = require("../config");


const signUpPayload = zod.object({
        username: zod.string().email(),
        password: zod.string().min(8).max(30),
        firstName: zod.string(),
        lastName: zod.string()
})

router.post("/signup",async(req,res)=>{

    const parsePayload = signUpPayload.safeParse(req.body);

    try {

        if(parsePayload.success){
            const exists = await User.findOne({username: req.body.username});
            if(!exists){

                const dbUser = await User.create({
                    username: req.body.username,
                    password: req.body.password,
                    firstName: req.body.firstName,
                    lastName: req.body.lastName
                })
                
                const token = jwt.sign({userId: dbUser._id}, JWT_SECRET);
                res.status(200).json({
                    msg: "user created successfully",
                    token: token
                })
            }
            else{
                res.status(411).json({
                    msg: "username already exists"
                })
            }
        }else{
            res.json({
                msg: "please enter a valid username or password"
            })
        }
    }
    catch (error) {
        res.status(500).json({
            msg: "an error occured"
        })
    }

});

const signinPayload = zod.object({
    username: zod.string().email(),
    password: zod.string().min(8).max(30)
});

router.post("/login", async(req,res)=>{

    const parsePayload = signinPayload.safeParse(req.body);

    if(parsePayload.success){

        const exists = await User.findOne({
            username: req.body.username,
            password: req.body.password
        })

        if(!exists){
          return res.status(404).json({msg: "wrong password or username"}); 
        }

        const token = jwt.sign({userId: exists._id}, JWT_SECRET);
        res.json({
            msg: "user logged in successfully",
            token: token
        });
      
        
    }
    else{
        res.send({
            msg: "Error while logging in"
        })
    }
    
})

module.exports = router;
