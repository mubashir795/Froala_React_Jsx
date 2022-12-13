import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import Logo from './images/froala-1.png';

function Footer() {
  return (
    <div className='footer-container'>
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <p>WYSIWYG EDITOR</p>
            <Link to='/'>Overview</Link>
            <Link to='/'>Features</Link>
            <Link to='/'>Pricing</Link>
            <Link to='/'>Download</Link>
            <Link to='/'>Examples</Link>
            <Link to='/'>FAQ</Link>
            <Link to='/'>solutions</Link>
            <Link to='/'>Legal</Link>
          </div>
          <div className='footer-link-items'>
            <p>FREE TOOLS</p>
            <Link to='/'>Design Blocks</Link>
            <Link to='/'>Online HTML Editor</Link>
            <Link to='/'>Pages</Link>
            <Link to='/'>Image Uploader</Link>
            <Link to='/'>WebTestIt</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <p>Resource</p>
            <Link to='/'>React Grid</Link>
            <Link to='/'>Docs</Link>
            <Link to='/'>Quick Start</Link>
            <Link to='/'>Blog</Link>
            <Link to='/'>Support</Link>
            <Link to='/'>Contact Us</Link>
            <Link to='/'>Case Studies</Link>
            <Link to='/'>Customizer</Link>
          </div>
          <div className='footer-link-items'>
            <p>Get In Touch</p>
            <Link to='/'>support@froala.com</Link>
          </div>
          <div className='footer-link-items'>
            <p>Sign Up</p>
            <Link>Join our email list and receive the latest case studies, event updates, product news, and much more!</Link>
          </div>
        </div>
      </div>
      <div className='footer-logo'>
        <img src={Logo} width="200" alt="logo"/>
      </div>
    </div>
  );
}

export default Footer;