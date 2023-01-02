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
import Inline from "./components/Pages/Inline";
import Extend from "./components/Pages/Extend";
import Online from "./components/Pages/Online";
import Plugin from "./components/Pages/Plugin";
import Uploader from"./components/Pages/Uploader";
import Solution from"./components/Pages/Solution";
import Sencha from"./components/Pages/Sencha";
import Unbounce from"./components/Pages/Unbounce";
import Artstation from "./components/Pages/Artstation";
import Closeio from "./components/Pages/Closeio";
import Sdkc from "./components/Pages/Sdkc";
import Toolbar from "./components/Pages/Toolbar";


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
          <Route path="/inline" exact element={<Inline />} />
          <Route path="/extend" exact element={<Extend />} />
          <Route path="/online" exact element={<Online />} />
          <Route path="/plugin" exact element={<Plugin />} />
          <Route path="/uploader" exact element={<Uploader />} />
          <Route path="/solution" exact element={<Solution />} />
          <Route path="/sencha" exact element={<Sencha />} />
          <Route path="/unbounce" exact element={<Unbounce />} />
          <Route path="/artstation" exact element={<Artstation />} />
          <Route path="/closeio" exact element={<Closeio />} />
          <Route path="/sdkc" exact element={<Sdkc />} />
          <Route path="/toolbar" exact element={<Toolbar />} />
        </Routes>
        <Footer/>
      </>

  );
}

export default App;
