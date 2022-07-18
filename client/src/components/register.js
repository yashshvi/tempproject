// import React ,{useState} from 'react'
import React, { useState } from 'react';
import axios from "axios";
import {NavLink, useHistory } from 'react-router-dom';
import styled from 'styled-components';
import './mycss/register.css'
// import { use } from '../../../server/router/auth'; 
const inputfield = {
  borderTop: 'none',
  borderRight: 'none',
  borderLeft: 'none',
  margin: '2px 2px',
  madd: '2px 2px',
  padding: '2px 2px',
  marginLeft: '1rem'
}
// const outter = styled.section`
// display: "flex";
// `;
export default function Register() {
const history=useHistory();
  const [user, setUser] = useState({
    name: "", email: "", Hoobies: "", color: "", about: "" ,password:"",cpassword:""
  });
  // const[muser,setUser]=useState({
  //   Hoobies: "", color: ""
  // });
  //setting default value of user=>name:"",email:"",Hoobies:"",color:"",about:""
  //and after setUser function we will change the value
  let name, value;
  const handleInput = (e) => {
    // console.log(e);
    name= e.target.name;//this means that in which name(name,enail,hoobies etc mai click hua hai)
    value= e.target.value;
    setUser({ ...user, [name]: value });//using spread operator and [name]:value for getting the dynamic value
  }
const Postdata=async()=>{
  // console.log("hi i am postdata fun");
  // console.log(e);
  // console.log("i am here");
// e.prevntDefault();//The preventDefault() method stops the default action of a selected element from happening by a user
const {name, email, Hoobies, color, about ,password,cpassword}=user;
// if(user.name===""||user.email===""||user.Hoobies===""||user.color===""||user.about===""||
// user.password===""||user.cpassword===""){
//   console.log("please enter all the filel");
// }else{
  console.log(user);
 const res=await fetch("/register",{
   method:"POST",
   credentials: 'include',  
    headers:{
    "Content-Type":"application/json"
   },
   body: JSON.stringify({
    name, email, Hoobies, color, about ,password ,cpassword
   })
 });
//  //for yourlist
//  const res=await fetch("/matchlist",{
//   method:"POST",
//   credentials: 'include',  
//    headers:{
//    "Content-Type":"application/json"
//   },
//   body: JSON.stringify({
//    Hoobies, color
//   })
// });

// }

 const data=await res.json();
 console.log("line 73"+data);
 if(!data){
   window.status("invalid registration");
 }else{
  //  window.status("registration successfull");
  console.log("hi here");
  //  alert("registration successfull")
   history.push('/login');
   window.location.reload();
 }
}

  return (
    <outter className='myoutter' style={{ display: "flex" ,"marginTop": "3rem"}}>
      <section style={{ width: "50%" ,marginBottom:"3rem"}} >
        <div className='container mt-5'>
          <div className='signup-content'>
            <div style={{ textAlign: "center" }} className='signup-form' >
              <h2 className='form-title heading'>
                Sign-up
              </h2>
              <form method='POST' style={{ fontSize: "1.5rem" }} className='register-form' id='register-form'>
                <div className='form-group'>
                  <label htmlFor='name'>
                    <i className="zmdi zmdi-face material-icons-name"></i>
                  </label>
                  <input style={inputfield} type="text" name='name' id="name" autoComplete='off'
                    value={user.name}
                    onChange={handleInput}
                    placeholder='your name'></input>
                </div>
                <div className='form-group'>
                  <label htmlFor='email'>
                    <i className="zmdi zmdi-accounts-list-alt material-icons-name"></i>
                    {/* <i class="zmdi zmdi-accounts-list-alt"></i> */}
                  </label>
                  <input style={inputfield} type="text" name='email' id="email" autoComplete='off'
                    value={user.email}
                    onChange={handleInput}
                    placeholder='Your E-mail'></input>
                </div>
                <div className='form-group'>
                  <label htmlFor='Hoobies'>
                    <i className="zmdi zmdi-star-circle material-icons-name"></i>
                    {/* <i class="zmdi zmdi-star-circle"></i> */}
                  </label>
                  <input style={inputfield} type="text" name='Hoobies' id="Hoobies" autoComplete='off'
                    value={user.Hoobies}
                    onChange={handleInput}
                    placeholder='Your Hoobies'></input>
                </div>
                <div className='form-group'>
                  <label htmlFor='Favourite Color'>
                    <i className=" zmdi zmdi-gamepad material-icons-name"></i>

                  </label>
                  <input style={inputfield} type="text" name='color' id="color" autoComplete='off'
                    value={user.color}
                    onChange={handleInput}
                    placeholder='Your Favourite color'></input>
                </div>
                <div className='form-group'>
                  <label htmlFor='About'>
                    <i className="zmdi zmdi-comment-edit material-icons-name"></i>
                    {/* <i class="zmdi zmdi-gamepad"></i> */}
                  </label>
                  <textarea style={inputfield} type="text-area" name='about' id="about" autoComplete='off'
                    value={user.about}
                    onChange={handleInput}
                    placeholder='About you'></textarea >
                </div>
                <div className='form-group'>
                  <label htmlFor='password'>
                    <i className="zmdi zmdi-comment-edit material-icons-name"></i>
                    {/* <i class="zmdi zmdi-gamepad"></i> */}
                  </label>
                  <input style={inputfield} type="password" name='password' id="password" autoComplete='off'
                    value={user.password}
                    onChange={handleInput}
                    placeholder='Your Password'></input >
                </div>
                <div className='form-group'>
                  <label htmlFor='cpassword'>
                    <i className="zmdi zmdi-comment-edit material-icons-name"></i>
                    {/* <i class="zmdi zmdi-gamepad"></i> */}
                  </label>
                  <input style={inputfield} type="password" name='cpassword' id="cpassword" autoComplete='off'
                    value={user.cpassword}
                    onChange={handleInput}
                    placeholder='Conform password'></input >
                </div>
                   <div>
                     <input type="submit" className='submitbutton' name='signup' value="Register" onClick={Postdata}/>
                   </div>
              </form>

            </div>
          </div>
        </div>
      </section>
      <section>
        <img style={{ height: "34rem", width: "50" }} src='../images/reg.webp'></img>
      </section>
    </outter>
  )
}
