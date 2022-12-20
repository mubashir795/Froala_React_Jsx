import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import Logo from './images/froala-1.png';


function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
    window.addEventListener('resize', showButton);
    
  }, []);


  return (
    <>
      <IconContext.Provider value={{ color: '#000' }}>
        <nav className='navbar'>
          <div className='navbar-container container'>
            <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
              <img src={Logo} width="200" alt="logo"/>
            </Link>
            <div className='menu-icon' onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
              <li className='nav-item'>
                <Link to='/download' className='nav-links' onClick={closeMobileMenu}>
                  Overview
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  to='/features'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  Features
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  to='/docs'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  Docs
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  to='/'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  Examples
                </Link>
              </li>
              <li className='nav-btn'>
                {button ? (
                  <Link to='/sign-up' className='btn-link pricing-btn'>Pricing</Link>
                ) : (
                  <Link to='/sign-up' className='btn-link pricing-btn'>Pricing</Link>
                )}
              </li>
              <li className='nav-btn'>
                {button ? (
                  <Link to='/sign-up' className='btn-link started-btn'>Get Started</Link>
                ) : (
                  <Link to='/sign-up' className='btn-link started-btn'>Get Started</Link>
                )}
              </li>
            </ul>
          </div>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
