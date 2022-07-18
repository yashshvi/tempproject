const mongoose=require("mongoose");
const loginuser=new mongoose.Schema({
  
  email:{
      type:String,
      required:true
  },
  password:{
    type:String,
    required:true
}
})
const Longininput=new mongoose.model("Longininput",loginuser);
module.exports=Longininput;