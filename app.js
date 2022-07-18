const dotenv=require("dotenv");
const cors = require('cors');
const express=require('express');
const app=express();
const multer  = require('multer')
// Userblog

// database
dotenv.config({path:'./config.env'});
const port=process.env.PORT || 1000;

const cookieParser = require('cookie-parser');
const Userblog = require("./modles/blog");
// Userblog
app.use(cookieParser())

// const port=3000;

//go to guide for info regarding dotenv
require("./db/conn");
app.use(express.json());
app.use(cors({
  origin: "*"
}))
//by this line we mean that data coming in form of json from mongocompass will be converted into object form  because our system does not understand json form
app.use(require('./router/auth'));
//now it will use URL link for router 
//the main work of router is to manage URL links from server side and respond to client 
// const middleware=(req,res,next)=>{
//     console.log("hello i am middleware");
//     next();
// }

const Storage=multer.diskStorage({
  destination:"uploads",
  filename:(req,file,cb)=>{
    cb(null,file.originalname);
  },
})

const upload=multer({
  storage:Storage
}).single('testImage');

app.get('/',(req,res)=>{
    res.send("hi i am here")
  })
  app.get('/register',(req,res)=>{
    res.send("hi i am register")
  })
  app.get('/login',(req,res)=>{
    res.send("hi i am login")
  })
  app.get('/blog',(req,res)=>{
    res.send("hi i am blog")
  })

  // app.post("/blog",(req,res)=>{
  //    upload(req,res,(err)=>{
  //     if(err){
  //       console.log(err);
  //     }else{
  //       const newblog=new Userblog({
  //         tosomeone:req.body.tosomeone,
  //         description:req.body.description,
  //         from:req.body.from,
  //         image:{
  //           date:req.file.filename,
  //           contentType:'image/png'
  //         }
  //       })
  //       newblog.save()
  //       .then(()=>res.send('successfully upload')).catch(err=>console.log(err))
  //     }
  //    })
  // })

  app.get('/allblog',async(req,res)=>{
    

  let data =await Userblog.find({})
 
    res.json(data)
  

  })
  
  // app.get('/matchlist',middleware,(req,res)=>{
  //   res.send("hi i am your match list")
  // })

  //deploying to router
  if(process.env.NODE_ENV=="production"){
    app.use(express.static("client/build"))
  }
 
app.listen(port,()=>{
    console.log(`listening to port ${port}`);
 });