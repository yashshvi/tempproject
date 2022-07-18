const Userblog=require("../modles/blog");
const getallblog =async(req,res,next)=>{
    try{
        const rootuser=await Userblog.find({});
        if(!rootuser){
            throw new Error("un-authorized user secretkey dosent match");
        }
        req.rootuser=rootuser;
        next();
    }catch(e){
        res.status(401).send("un-authorized user");
         console.log(e);
    }
   
}
module.exports=getallblog;