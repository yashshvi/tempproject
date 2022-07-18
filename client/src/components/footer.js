import React from 'react'
import styled from 'styled-components';
export default function footer() {
    const Cont=styled.div`
    height: 5%;
    background-color: #dcf4ff;
    text-align: center;
    position: fixed;
    width: 100%;
    bottom: 0px;
    margin-top: 1rem;
   `;
   
  return (
    <Cont>
      <h2 style={{ fontWeight: 'normal' , fontSize: "1.5rem"}}>thanks for visiting</h2>
    </Cont>
  )
}
