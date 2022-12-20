import React from "react";
import './globalStyles.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import  Footer  from './components/Footer/Footer';
import Home from './components/Pages/Home';
import Navbar from './components/Navbar/Navbar';
import Download from './components/Pages/Download';
import Features from "./components/Pages/Features";


function App() {
  return (
      <>
        <Navbar/>
        <Routes>
          <Route path="/" exact element={<Home/>} />
          <Route path="/download" exact element={<Download />} />
          <Route path="/features" exact element={<Features />} />
        </Routes>
        <Footer/>
      </>

  );
}

export default App;
