const express=require('express');
const mongo= require('mongodb');
const md5=require('md5');
const jwt = require('jsonwebtoken');
const router=express.Router();
const uri="mongodb://localhost:27017/"
router.post('/register',(req,res)=>{
    const user={
        name:req.body.name,
        email:req.body.email,
        password: md5(req.body.password)
    }
    mongo.connect(uri,(err,db)=>{
        if(err)
            throw err
        const postdb  = db.db("postdb")
        postdb.collection("users").insertOne(user,(err,result)=>{
            if(err)
                throw err
            res.status(201).json({
                message:"User Created Successfully",
                user: result.ops
            });
        })
    })
});
router.post('/login',(req,res)=>{
    const userData=req.body;
    mongo.connect(uri,(err,db)=>{
        if(err)
            throw err
        const postdb=db.db("postdb")
        postdb.collection("users").findOne({email:userData.email},(err,result)=>{
            if(err){
                res.status(200).json({
                    message:"Invalid email/password",
                    user: [],
                    token:''
                })
            }else{
                if(result!=null){
                    if(result.password === md5(userData.password)){
                        const token= jwt.sign({userName: result.name, id: result._id},'56478293ppdhq55143sssllpp')
                        res.status(200).json({
                            message:"User Logged in Successfully",
                            user: {userName: result.name, id: result._id},
                            token:token
                        })
                    }
                    else{  
                        res.status(200).json({
                            message:"Invalid email/password",
                            user: [],
                            token: ''
                        })
                    }
                }else{
                    res.status(200).json({
                        message:"Invalid email/password",
                        user: [],
                        token: ''
                    })
                }
            }
        })
    })
});
module.exports=router;
