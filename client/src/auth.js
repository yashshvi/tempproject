const express=require("express");
const router=express.Router();
console.log("i am auth");
router.get("/",(req,res)=>{
       res.send("hi i am first page in back juguib");
     })
module.exports=router;