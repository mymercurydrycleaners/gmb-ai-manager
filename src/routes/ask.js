const express=require("express");

const router=express.Router();

const {askGemini}=require("../ai/gemini");

const asyncHandler=require("../middleware/asyncHandler");

router.get("/",

asyncHandler(async(req,res)=>{

const q=req.query.q;

if(!q){

return res.status(400).json({

success:false,

message:"Missing ?q="

});

}

const answer=

await askGemini(q);

res.json({

success:true,

question:q,

answer

});

})

);

module.exports=router;
