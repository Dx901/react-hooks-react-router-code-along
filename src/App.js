import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Login from "./Login";
import NavBar from "./Navbar";
import Signup from "./Signup"
import Messages from "./Messages"

function App () {
  return(
    <React.Fragment>
      <NavBar />
  <Routes>
  <Route path="/" element ={<Home/>}/>
  <Route path="/About" element ={<About/>}/>
  <Route path="/Login" element ={<Login/>}/>
  <Route path="/Signup" element ={<Signup/>}/>
  <Route path="/Messages" element ={<Messages/>}/>
  </Routes>
    </React.Fragment>
  )
}

export default App;