const mongoose=require("mongoose");
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');

const userinput=new mongoose.Schema({
    name:{
        type:String
   },
   email:{
    type:String
   },
   Hoobies:{
    type:String
   },
   color:{
    type:String
   },
   about:{
    type:String
   },
   password:{
       type:String,
   },cpassword:{
       type:String,
   } ,
   tokens:[
       {
           token:{
              type:String,
              require:true 
           }
       }
   ]
})
//jai
userinput.pre('save',async function(next){
    // var salt=await bcrypt.genSalt(10);
    if(this.isModified('password')){  //means password field in not empty
this.password=await bcrypt.hash(this.password,12);
this.cpassword=await bcrypt.hash(this.cpassword,12);
    }
 next();
});
//we are generating web token
userinput.methods.generateAuthToken=async function(){
    try{
let token=jwt.sign({_id:this._id},process.env.SECRET_KEY);
//SECRET_KEY is present in config.env
//will generate web token and comparing with _id
this.tokens=this.tokens.concat({token:token});
// concating the entered token with prev present  token 
await this.save();
return token;
    }catch(error){
  console.log(error);
    }
}
const Input= new mongoose.model("Input",userinput);
module.exports=Input;