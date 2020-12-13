const express=require('express');
const router=express.Router();
const mongo=require('mongodb');
//const checkAuth= require('../middleware/checkauth');
const uri="mongodb://localhost:27017/"
router.get('/posts',(req,res)=>{
    mongo.connect(uri,(err,db)=>{
        if(err)
            throw err;
        const postdb=db.db("postdb");
        postdb.collection("posts").find().toArray((err,result)=>{
            if(err)
                throw err
            res.status(200).json({
                message:"data fetched",
                posts:result
            }) 
        })
    })
})
router.post('/save',(req,res)=>{
    const post={
        title:req.body.title,
        description:req.body.description
    }
    mongo.connect(uri,(err,db)=>{
        if(err)
            throw err;
        const postdb=db.db("postdb");
        postdb.collection("posts").insertOne(post,(err,result)=>{
            if(err)
                throw err
            res.status(200).json({
                message:"data saved successfully",
                posts:result
            }) 
        })
    })
})
module.exports=router;