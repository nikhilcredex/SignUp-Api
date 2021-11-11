const express=require('express');
const router = new express.Router();
const _=require('lodash');

const user=require('../model/model.js');

// Create and Save a new User
router.post("/create",async (req,res)=>{
    try{
        const getPreviouse_Id=await user.find().sort({_id:-1});
        const firstId=_.get(_.first(getPreviouse_Id),'signId',999);
        const newId=firstId+1;
        Object.assign(req.body,{signId:newId});
        const addingStudent=new student(req.body);
        
        if(req.body.wantScholar!='yes' && req.body.description!=""){
            res.status(400).send({
                message: "Description is not required."
            });
        } 
        const insertUser=await addingUser.save();
        res.status(201).send(insertUser);
    }
    catch(error){
        res.status(400).send(error);
    }
});

// Retrieve and return all User Data from the database.
router.get("/all",async (req,res)=>{
    try{
        const getUser= await user.find({});
        res.send(getUser);
    }catch(error){
        res.status(400).send(error);
    }
})

// Find a single User Data with a signId
router.get("/one/:signId",async (req,res)=>{
    try{
        const id=req.params.signId;
        const getUser= await user.findOne({"signId":id});
        res.send(getUser);
    }catch(error){
        res.status(400).send(error);
    }
});

// Update a User Data identified by the signId
router.patch("/update/:signId",async (req,res)=>{
    try{
        const id=req.params.signId;
        const updateUser=await user.updateOne({"signId":id},req.body,{
            new:true
        });
        res.send(updateUser);
    }catch(error){
        res.status(500).send(error);
    }
})

// Delete a User Data with the specified signId
router.delete("/delete/:signId",async (req,res)=>{
    try{
        const id=req.params.signId;
        const deleteUser=await user.deleteOne({"signId":id});
        res.send(deleteUser);
    }catch(error){
        res.status(500).send(error);
    }
})

module.exports=router;
