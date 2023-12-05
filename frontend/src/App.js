import React, { useEffect, useState } from 'react';
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from './components/Home';
import Navbar from "./components/Navbar";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from './components/Footer';
import Login from './components/Login';
import Add from "./components/Add";
import Delete from './components/Delete';

const App = () => {
  const[cookie,setCookie] = useState("");

  useEffect(()=>{
    setCookie(localStorage.getItem("sanket"));
  },[])
  return (
    <>
     <Navbar cookie={cookie} setCookie={setCookie}></Navbar>

     <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/login" element={<Login setCookie={setCookie} cookie={cookie}/>} />
      <Route path="/add" element={<Add/>} />
      <Route path="/del" element={<Delete/>} />
     </Routes>

     <Footer></Footer>
    </>
  )
}

export default App
