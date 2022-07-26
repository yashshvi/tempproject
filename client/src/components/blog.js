import React, { useState } from 'react';
// import axios from "axios";
import { NavLink, useHistory } from 'react-router-dom';
import styled from 'styled-components';
import './mycss/blog.css'
const inputfield = {
  width: '70%',
  marginTop: '1rem'
}

export default function Blog() {
  const history = useHistory();
  const [tosomeone, setTo] = useState("");
  //tosomeone vaue is initally set to null when setTo funtion is called it will give entered value to tosomeone
  const [description, setDesc] = useState("");
  const [from, setFrom] = useState("");
  // console.log(tosomeone+"*"+description+"*"+from);
  const blogfunction = async (e) => {
     e.preventDefault();
//we are taking (tosomeone,description,from) values and triggring to  /blog which has a post method 
// and then converting entered data into string 
// JSON.stringify for convering json data to string
//parseInt for convering string data to json
    const res = await fetch('/blog', {
      method: 'POST',
      credentials: 'include',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        tosomeone,
        description,
        from
      })
    })
    // console.log("in blog.js");
    // console.log(res);
    //  JSON.parse(value)
    const data =  res;
    if (res.status == 400 || !data) {
      window.alert("invalid credential")
    } else {
      window.alert("post created successfully");
      history.push('/');
      window.location.reload();
    }
  }
 const fileChange=event=>{
    console.log(event.target.files[0]);
  }
  return (
    <>
      <outter style={{ display: "flex", width: '100%' }}>
        <section style={{ width: "100%" }} className='signup mt-5'>
          <div className='container1 '>
            <div className='signup-content'>
              <div style={{ textAlign: "center" }} className='signup-form' >
                <h2 className='form-title heading'>
                  Create post
                </h2>
                <form method='POST' style={{ fontSize: "1.5rem", width: "100%" }} className='register-form' id='register-form'>
                  <div className='form-group'>

                    <input style={inputfield} className='myinput' type="text" name='tosomeone' id="tosomeone" autoComplete='off'
                      value={tosomeone}
                      onChange={(e) => setTo(e.target.value)}
                      placeholder='Enter your lovers secret name'></input>
                  </div>
                  <div className='form-group'>

                    <textarea style={inputfield} className='myinput' type="text" name='description' id="description" autoComplete='off'
                      value={description}
                      onChange={(e) => setDesc(e.target.value)}
                      placeholder='A letter to your loveone'></textarea>
                  </div>
                  <div className='form-group'>

                    <input style={inputfield} className='myinput' type="text" name='from' id="from"
                     autoComplete='off'
                      value={from}
                      onChange={(e) => setFrom(e.target.value)}
                      placeholder='Enter your secret name'></input>
                  </div>
                      
                   

                  <div>
                    <input style={inputfield} type="submit" className='submitbutton' name='createpost' value="createpost" onClick={blogfunction} />
                  </div>
                </form>

              </div>
            </div>
          </div>
        </section>

      </outter>
    </>
  )
}
