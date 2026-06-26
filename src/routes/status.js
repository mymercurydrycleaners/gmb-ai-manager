const express=require("express");

const router=express.Router();

router.get("/",(req,res)=>{

res.json({

success:true,

server:"Running",

gemini:

process.env.GEMINI_API_KEY

?"Connected"

:"Missing",

uptime:process.uptime(),

timestamp:new Date()

});

});

module.exports=router;
