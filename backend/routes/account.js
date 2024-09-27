const express = require("express");
const router = express.Router();
const authMiddleware = require("../middlewares/user");
const { Account } = require("../db/db");
const { default: mongoose } = require("mongoose");
const zod = require("zod")

router.get("/balance", authMiddleware,async(req,res)=>{
    const exists = await Account.findOne({userId:req.userId});
    try {
        if(!exists){
            return res.status(404).json({
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

const receiveSchema = zod.object({
    to: zod.string(),
    amount: zod.number().refine(n=>n>=1)
})

router.post("/transfer", authMiddleware, async(req,res)=>{

    const parsePayload = receiveSchema.safeParse(req.body) 
    // starting a mongoose session

    if(parsePayload.success){

        const session = await mongoose.startSession();
        session.startTransaction();

        // taking the inputs in body
        const amount = parseFloat(req.body.amount);
        const to = req.body.to;

        try{
            // finding the "from account" does it exists or not
            const fromAccount = await Account.findOne({userId: req.userId}).session(session);
            if(!fromAccount || fromAccount.balance < amount){
                session.abortTransaction();
                return res.status(400).json({
                    msg: "insufficient Balance"
                })
            }


            // finding the "to account" does it exists or not
            const toAccount = await Account.findOne({userId: to}).session(session)
            if(!toAccount){
                session.abortTransaction();
                res.status(400).json({
                    msg: "invalid account"
                })
            }

            // processing the transaction for users
            await Account.findOneAndUpdate({ userId: req.userId }, { $inc: { balance: -amount }}).session(session);
            await Account.findOneAndUpdate({ userId: to }, {$inc:{balance: amount}}).session(session);

            // committing the transaction
            await session.commitTransaction();
            res.status(200).json({
                msg: "transfer successfull"
            });
        }catch(error){

            res.status(500).json({
                msg: "an error occured"
            })

        }finally{

            session.endSession();
        }

    }else{
        res.status(500).json({
            msg: 'WRONG INPUT, enter a valid amount'
        })
    }
    
        
});

module.exports = router;