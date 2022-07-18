import React from 'react'

import styled from 'styled-components';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "./mycss/header.css"



export default function header() {
  return (
<Navbar style={{ position:"fixed", width:"100%",top:"0px" ,zIndex: '1'}}  bg="light" expand="lg" >
<Container fluid className='mynav' >
 
         <a style={{ fontFamily: "fangsong" }} class="navbar-brand" href="#">
             <img src="/images/lg1.png" alt="" width="30" height="24" class="d-inline-block align-text-top" />
             Itsa_Match
          </a>
  <Navbar.Toggle aria-controls="navbarScroll" />
  <Navbar.Collapse id="navbarScroll">
    <Nav
      className="me-auto my-2 my-lg-0"
      style={{ maxHeight: '100px' }}
      navbarScroll
    >
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/register">Register</Nav.Link>
      <Nav.Link href="/login">Login</Nav.Link>
      {/* <Nav.Link href="/matchlist">List</Nav.Link> */}
      <Nav.Link href="/blog">Create blog</Nav.Link>
      <Nav.Link href="/allblog">Trending blog</Nav.Link>
      <Nav.Link href="/wallpaper">Wallpaper</Nav.Link>
      <Nav.Link href="/lovecalculator">loveCalculator</Nav.Link>
      
      <a class="navbar-brand" className='pimg' href="/about">
             <img   src="/images/profile.png" alt="" width="30" height="24" class="d-inline-block align-text-top" />
      </a>
    </Nav>
  </Navbar.Collapse>
</Container>
</Navbar>
  )
}
