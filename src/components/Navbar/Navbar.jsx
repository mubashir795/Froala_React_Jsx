import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { Button } from '../../globalStyles';
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavItemBtn,
  NavLinks,
  NavBtnLink
} from './Navbar.elements';
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
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <IconContext.Provider value={{ color: '#000' }}>
        <Nav>
          <NavbarContainer>
            <NavLogo to='/'>
              <img src={Logo} width="200" alt="logo"/>
            </NavLogo>
            <MobileIcon>
              {click ? <FaTimes /> : <FaBars />}
            </MobileIcon>
            <NavMenu onClick={handleClick} click={click}>
              <NavItem>
                <NavLinks to='/' onClick={closeMobileMenu}>
                  Overview
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to='/' onClick={closeMobileMenu}>
                  Features
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to='/' onClick={closeMobileMenu}>
                  Docs
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to='/' onClick={closeMobileMenu}>
                  Examples
                </NavLinks>
              </NavItem>
              <NavItemBtn>
                {button ? (
                  <NavBtnLink to='/'>
                    <Button primary>Pricing</Button>
                  </NavBtnLink>
                ) : (
                  <NavBtnLink to='/'>
                    <Button onClick={closeMobileMenu} fontBig primary>
                      Pricing
                    </Button>
                  </NavBtnLink>
                )}
              </NavItemBtn>
              <NavItemBtn>
                {button ? (
                  <NavBtnLink to='/'>
                    <Button primary>Get Started</Button>
                  </NavBtnLink>
                ) : (
                  <NavBtnLink to='/'>
                    <Button onClick={closeMobileMenu} fontBig primary>
                      Get Started
                    </Button>
                  </NavBtnLink>
                )}
              </NavItemBtn>
            </NavMenu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
  }
  
  export default Navbar;
