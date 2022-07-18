const mongoose=require('mongoose');
const matchfriend=new mongoose.Schema({
    name:{
        type:String,
    },
    Hoobies:{
        type:String
    },
    color:{
        type:String
    }
})
const Matchfriend=new mongoose.model("Matchfriend",matchfriend);
module.exports=Matchfriend;