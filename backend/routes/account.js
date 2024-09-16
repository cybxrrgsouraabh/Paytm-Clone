const express = require("express");
const router = express.Router();
const zod = require("zod");
const authMiddleware = require("../middlewares/user");
const { User, Account } = require("../db/db");
const { route } = require("./user");


router.get("/balance", authMiddleware,async(req,res)=>{
    const exists = await Account.findOne({userId:req.userId});
    try {
        if(!exists){
            return res.status().json({
                msg: "the account does not exists"
            }) 
        }
        res.status(200).json({
            balance: exists.balance
        })

    } catch (error) {
        res.status(500).json({
            msg: "an error occured"
        })
    }
})

router.post("/transfer", (req,res)=>{

})

module.exports = router;