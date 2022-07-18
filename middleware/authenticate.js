const jwt=require("jsonwebtoken");
// const Matchlist = require("../modles/match");
const Input = require("../modles/register");
const Authenticate =async(req,res,next)=>{
try{
  const token=req.cookies.jwtoken;
  // console.log("&&&&&&&&&&&"+token);
// console.log(req.cookies,"&&&&&&&&&&");
  const verifytoken=jwt.verify(token,process.env.SECRET_KEY);
  // console.log("************"+verifytoken)
  const rootuser=await Input.findOne({_id:verifytoken._id,"tokens.token":token});
  
  if(!rootuser){
      throw new Error("un-authorized user secretkey dosent match");
  }
  req.token=token;
  req.rootuser=rootuser;
  // console.log(req);
  req.userId=rootuser._id;
  // console.log(req.userId);
  next();
}catch(e){
    res.status(401).send("un-authorized user");
    console.log(e);
}
}
module.exports=Authenticate;