import React from "react";
import GlobalStyle from './globalStyles';
import { BrowserRouter as Router } from 'react-router-dom';
import  Footer  from './components/Footer/Footer';
import Home from "./Home";
import Navbar from "./components/Navbar/Navbar"


function App() {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <Home />
      <Footer />
    </Router>
  );
}

export default App;
