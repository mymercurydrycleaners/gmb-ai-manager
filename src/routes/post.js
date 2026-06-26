const express=require("express");

const router=express.Router();

const {

generatePost

}=require("../ai/postGenerator");

router.get("/",async(req,res)=>{

try{

const topic=req.query.topic;

if(!topic){

return res.status(400).json({

success:false,

message:"Missing topic"

});

}

const post=

await generatePost(topic);

res.json({

success:true,

post

});

}

catch(err){

res.status(500).json({

success:false,

message:err.message

});

}

});

module.exports=router;
