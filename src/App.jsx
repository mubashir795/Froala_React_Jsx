import React from "react";
import './globalStyles.css';
import { BrowserRouter as Router } from 'react-router-dom';
import  Footer  from './components/Footer/Footer';
import Home from './Home';
import Navbar from './components/Navbar/Navbar';


function App() {
  return (
    <Router>
      <Navbar />
      <Home />
      <Footer />
    </Router>
  );
}

export default App;
