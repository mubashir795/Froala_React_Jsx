import React from "react";
import './globalStyles.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import  Footer  from './components/Footer/Footer';
import Home from './components/Pages/Home';
import Navbar from './components/Navbar/Navbar';
import Demo from './components/Pages/Demo';
// import Demo from './Demo';


function App() {
  return (
      <>
      <Navbar/>
      <Routes>
      <Route path="/" exact element={<Home/>} />
        <Route path="/demo" exact element={<Demo />} />
      </Routes>
      <Footer/>
      </>

  );
}

export default App;
