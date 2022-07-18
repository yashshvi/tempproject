import React from 'react'
import styled from 'styled-components';

import Subheader from './subheader';
import Middle from './middle';
// import Footer from './footer';
import Third from './third';
export default function home() {
  return (
    <div> 
      <>
      
      <Subheader styled={{backgroundImage: "url('/images/mynewback.jpg')"}}/>
          <Third/>
       <Middle style={{ backgroundColor:"blue", position:"absolute" , zIndex:1 }}/>
       {/* position: relative; */}
    {/* z-index: -1; */}
      </>
    </div>
  )
}
