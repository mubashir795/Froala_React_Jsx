import React from "react";
import './globalStyles.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import  Footer  from './components/Footer/Footer';
import Home from './components/Pages/Home';
import Navbar from './components/Navbar/Navbar';
import Download from './components/Pages/Download';
import Features from "./components/Pages/Features";
import Docs from "./components/Pages/Docs";
import Customers from "./components/Pages/Customers";


function App() {
  return (
      <>
        <Navbar/>
        <Routes>
          <Route path="/" exact element={<Home/>} />
          <Route path="/download" exact element={<Download />} />
          <Route path="/features" exact element={<Features />} />
          <Route path="/docs" exact element={<Docs />} />
          <Route path="/customers" exact element={<Customers />} />
        </Routes>
        <Footer/>
      </>

  );
}

export default App;
