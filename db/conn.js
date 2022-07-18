const mongoose=require('mongoose');
const dotenv=require("dotenv");
// const DB="mongodb://localhost:27017/Itsamatch";
dotenv.config({path:'./config.env'});
const DB=process.env.DATABASE;
let database =mongoose.connect(DB,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
console.log(`Connection made successfully`);
}).catch((e)=>{
    console.log(`Connection is unsuccessfully`);
    console.log(e);
})

module.exports = database