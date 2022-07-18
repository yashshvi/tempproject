// import React ,{useState} from 'react'
import React, { useState } from 'react';
// import axios from "axios";
import {NavLink, useHistory } from 'react-router-dom';
import './mycss/login.css'
const inputfield = {
  borderTop: 'none',
  borderRight: 'none',
  borderLeft: 'none',
  margin: '2px 2px',
  madd: '2px 2px',
  padding: '2px 2px',
  marginLeft: '1rem'
}
export default function Login() {
  const history=useHistory();
  
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  
  const loginfun=async(e)=>{
    console.log(e);
    e.preventDefault();//to stop loading of form
    const res=await fetch('/login',{
      method:'POST',
      headers:{
        "Content-Type":"application/json"
       },
       body: JSON.stringify({
        email,
        password
       })
    })
    const data=res.json();
    if(res.status===400 || !data){
      window.alert("invalid credential")
    }else{
      window.alert("login successfully in login.js");
      history.push('/');
      window.location.reload();
    }
  }
  return (
    <outter className='myoutter' style={{ display: "flex" }}>
      <section style={{ width: "50%" }} className='signup mt-5'>
        <div className='container mt-5'>
          <div className='signup-content'>
            <div style={{ textAlign: "center" }} className='signup-form' >
              <h2 className='form-title heading'>
                Sign-in
              </h2>
              <form method='POST' style={{ fontSize: "1.5rem" }} className='register-form' id='register-form'>
              <div className='form-group'>
                  <label htmlFor='email'>
                    <i className="zmdi zmdi-face material-icons-name"></i>
                  </label>
                  <input style={inputfield} type="text" name='email' id="email" autoComplete='off'
                   value={email}
                   onChange={(e)=>setEmail(e.target.value)}
                   placeholder='Your Email'></input>
                </div>
              <div className='form-group'>
                  <label htmlFor='name'>
                    <i className="zmdi zmdi-accounts-list-alt material-icons-name"></i>
                    {/* <i class="zmdi zmdi-accounts-list-alt"></i> */}
                  </label>
                  <input style={inputfield} type="text" name='password' id="password" autoComplete='off'
                      value={password}
                      onChange={(e)=>setPassword(e.target.value)}
                    placeholder='Your password'></input>
                </div>
            
              
               
                   <div>
                     <input  type="submit" name='signin' className='submitbutton' value="submit" onClick={loginfun}/>
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
