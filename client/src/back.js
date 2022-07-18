const dotenv=require("dotenv");
const mongoose=require("mongoose");
const express=require('express');
const app=express();
dotenv.config
const bodyparser=require('body-parser'); // for partials
const port= process.env.PORT || 4000;   //process.env.PORT this means if we want to run our program then it  will run in thie port otherwise in localhost run in  7000
 
require("../server/db/conn")
const Input=require("../server/modles/register");
// require("./auth.js");
app.get("/",(req,res)=>{
   // res.send("hi i am first page in back juguib");
   res.render("./components/register")
 })
//  app.get("/register",(req,res)=>{
//     console.log("hi i am register page");
//  })
app.listen(port,()=>{
   console.log(`listening to port ${port}`);
});