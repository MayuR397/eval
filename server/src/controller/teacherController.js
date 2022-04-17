const express=require("express");

const Teacher=require("../modules/schema");
const router=express.Router();

router.post("",async(req,res)=>{
    try {
        const teacher=await Teacher.create(req.body);
        console.log(teacher)
        return res.status(201).send(teacher)
    } catch (error) {
        return res.status(500).send({message:error.message})
    }
})
router.get("",async(req,res)=>{
    try {
        const teacher=await Teacher.find().lean().exec();
        return res.status(201).send(teacher)
    } catch (error) {
        return res.status(500).send({message:error.message})
    }
})




module.exports=router