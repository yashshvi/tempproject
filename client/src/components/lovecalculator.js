import React, { useEffect, useState } from 'react'
import "./mycss/lovecalc.css"
export default function Lovecalculator() {
    const [input1, getval1] = useState("");
    // console.log(input1);
    const [input2, getval2] = useState("");
    // console.log(input2);

    const [user, Setuser] = useState([]);
    // console.log(user);
    // console.log(user.fname);
    
   
    const getdatafun = async () => {
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '049bd37e3cmsh88f59ad625444b7p10de8bjsn884cc0ef7ec0',
                'X-RapidAPI-Host': 'love-calculator.p.rapidapi.com'
            }
        };
        console.log(input1);
        console.log(input2);
        fetch(`https://love-calculator.p.rapidapi.com/getPercentage?sname=${input1}&fname=${input2}`, options)
            .then(response => response.json())
            .then(data => { Setuser(data) } )
            .catch(err => console.error(err)); 

    }
    
    function submitfunction(){
        getdatafun();
    }
    return (
        <>
        
           <div className='outputdiv'>
                
           <h1>{user.percentage}</h1>
           <h1>{user.result}</h1>
           
           </div>
        
            <div className='mdiv'>
    <h2 className='h1'>Hi i am love calculator</h2>
      <h3 className='h2'>Enter your name</h3>
      <input className='input1' onInput={e=>getval1(e.target.value)}></input>
      <h3 className='h2'>Enter your crush name</h3>
      <input className='input2' onInput={e=>getval2(e.target.value)}></input>
      <br></br>
       <button className='but' onClick={submitfunction} >Submit</button>
   <img src="/images/cat-bugcat.gif"></img>
            </div>
        </>
    )
}
