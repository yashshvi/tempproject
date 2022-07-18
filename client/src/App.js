import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import { Route, Routes } from "react-router-dom";
// import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
import Header from './components/header';

// import Subheader from './components/subheader' ;
// import Middle from './components/middle';
import Footer from './components/footer';
// import Third from './components/third';

import Register from './components/register.js';
import Home from './components/home.js';
import Login from './components/login.js';
import Blog from './components/blog.js';
import About from './components/About.js';
import Allblog from './components/Allblog';
import Wallpaper from './components/wallpaper';
import Lovecalculator from './components/lovecalculator';
const Cont=styled.section`

 height: 100vh;
    `;
  
function App() {
  return (
    // <div className="App">
      <Cont>
       <Header/>
       <Route exact path="/">
         <Home/>
       </Route>
       <Route exact path="/register">
         <Register/>
       </Route>
       <Route exact path="/login">
         <Login/>
       </Route>
       <Route exact path="/blog">
         <Blog/>
       </Route>
       <Route exact path="/about">
         <About/>
       </Route>
       <Route exact path="/allblog">
         <Allblog/>
       </Route>
       <Route exact path="/wallpaper">
       <Wallpaper/>
       </Route>
       <Route exact path="/lovecalculator">
       <Lovecalculator/>
       </Route>

       <Footer/>
       {/* <Register/> */}
      </Cont>
    // {/* </div> */}
   
  );
}

export default App;
