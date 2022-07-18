const mongoose=require("mongoose");
const newblog= new mongoose.Schema({
    tosomeone:{
        type:String
    },
    description:{
        type:String
    },
    from:{
        type:String
    },
    image:{
        data:Buffer,
        contentType:String
    }
})
const Userblog=new mongoose.model("Userblog",newblog);
module.exports=Userblog;