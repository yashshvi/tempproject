import React from 'react'
// import React, { useState } from 'react'
import Styled from "styled-components";
// import './third.css'
import './mycss/third.css'
export default function third() {
    // const [WorkData,setWorkData]=useState();

    return (

    <>
     <header>
         <section  className='container1 main-hero'>
             <div className='row'>
                 <div className='col-12 col-lg-10 '>
                          <h1 className='display-3'> 
                             Lets find perfect match for you <br/> Your true soulMate.
                          </h1>
                          <p className='main-hero'>
                          A soulmate is someone who you feel deeply connected to not in a dependent or needy way. The guiding principle in a relationship between soulmates
                          </p>
                          <h3>Get your perfect match</h3>
                 </div>
             </div>
             {/* //  right side */}
          
             <div className='col-12 col-lg-6 main-hero-images'>
                 <img src='images/image1.jpg' className='img-fluid hero-image1'/>
                 <img src='images/image2.webp' className='img-fluid hero-image2'/>
             </div>
         </section>
    </header> 
    </>
  )
}



////  9 line
    //   <div className='col-12 col-lg-6 header-left-side d-flex justify-content-center flex-column
// align-items-start hihere '>



//21
//    <div className='col-12 col-lg-6 header-right-side d-flex justify-content-center
// align-items-center main-hero-images'>