const express = require("express");
const bcrypt = require('bcrypt');
const router = express.Router();
var jwt = require('jsonwebtoken');


const Input = require("../modles/register");
const Longininput = require("../modles/login");
const Matchlist=require('../modles/match');
const Userblog=require('../modles/blog')
const authenticate=require("../middleware/authenticate");
const getallblog=require("../middleware/getallblog");

router.post('/register', async (req, res) => {
  const { name, email, Hoobies, color, about, password, cpassword } = req.body;
  // if (!name || !email || !Hoobies || !color || !about || !password || !cpassword) {
  //  return res.status(422).json({ error: "please fill all fields" });
  // } 
  // else {
    //left email is email store in data base and right email is email user enter email 
    //for registration both should be different
    try{
       const userExist = await Input.findOne({ email: email })
       console.log(userExist);
      if(userExist){
        return res.status(404).json({ error: "User already exist" });
      }else if(password != cpassword){
        return res.status(404).json({ error: "password and conform password does not match" });
      }else{
        const user = new Input({ name, email, Hoobies, color, about, password, cpassword });
        const muser=new Matchlist({name,Hoobies, color});
        //yaha pa we will do bcrypt  see in register.js
        user.save();
        muser.save();
        res.status(201).json({ message: "Register successfully" });
            console.log("Register successfully");
           
      }
    } catch(e){
        console.log(e);
    } 
})
// router.get('/matchlist',async(req,res)=>{
// const {Hoobies, color}=req.body;
// try{
//   const userExist=await Matchlist.findOne({Hoobies:Hoobies,color:color})
//   var myArray = new Array();
//   if(userExist){
//    myArray.push("string 2");
//   }else{
//     const user=new Matchlist({ Hoobies, color});
//     user.save();
//     res.status(201).json({ message: "No data save successfully" });
//   }
//   console.log(myArray);
// }catch(e){
//   console.log(e);
// }
   
// })
router.post("/login", async (req, res) => {
  console.log("hiii");
  try {
    let token;
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(422).json({ error: "please fill all fields" });
    }
    const luser = await Input.findOne({ email: email });
    // console.log(luser);

    if (!luser) {
      res.status(201).json({ message: "invalid credential" });
    } else {
      const isMatch = await bcrypt.compare(password, luser.password);
      //calling generateAuthToken function it will return a token 
      //generateAuthToken is presentt in register.js
      token = await luser.generateAuthToken();
      //for generating jsw when user will login .
      //we are using jwt because to give access to only login user to see restricted pages like about page,contact etc
      console.log(token);
      res.cookie("jwtoken", token, {
        expires: new Date(Date.now() + 25892000000),
        httpOnly: true

      })
      /*    // the token will expire in 30 (25892000000 in millisec) 
      */

      if (!isMatch) {
        res.status(201).json({ message: "invalid credential" });
      } else {
        res.status(201).json({ message: "login successfully in auth " });
      }
    }

  } catch (error) {
    console.log(error);
    res.status(201).json({ message: "error" });
  }
})
router.post("/blog",async(req,res)=>{
  
  const {tosomeone, description, from} =req.body;
   
  try{
    if(!tosomeone || !description || !from){
      return res.status(422).json({error:"please enter all the field"})
    }
    const newblog=new Userblog({tosomeone,description,from});
    newblog.save();
    console.log("data save successfully");
    
    // console.log(req)
    res.send()

  }catch(e){
    console.log(e);
  }
})



 router.get('/about',authenticate,(req,res)=>{
  // console.log("hini m next ");  
    res.send(req.rootuser);
  })
//my changes
  router.get('/register',authenticate,(req,res)=>{
    // console.log("hini m next ");  
      res.send(req.rootuser);
    })
  
    router.get('/login',authenticate,(req,res)=>{
      // console.log("hini m next ");  
        res.send(req.rootuser);
      })
  
      router.get('/wallpaper',authenticate,(req,res)=>{
        // console.log("hini m next ");  
          res.send(req.rootuser);
        })

        router.get('/lovecalculator',authenticate,(req,res)=>{
          // console.log("hini m next ");  
            res.send(req.rootuser);
          })
          
        
  router.get('/blog',getallblog,(req,res)=>{
    // console.log("hini m next ");  
      res.send(req.rootuser);
    })

 
module.exports = router;
