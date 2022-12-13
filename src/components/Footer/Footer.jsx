import React from 'react';
import {
  FooterContainer,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo
} from './Footer.elements';
import Logo from './images/froala-1.png';

function Footer() {
  return (
    <FooterContainer>
      <FooterLinksContainer>
        <FooterLinksWrapper>
          <FooterLinkItems>
            <FooterLinkTitle>WYSIWYG EDITOR</FooterLinkTitle>
            <FooterLink to='/'>Overview</FooterLink>
            <FooterLink to='/'>Features</FooterLink>
            <FooterLink to='/'>Pricing</FooterLink>
            <FooterLink to='/'>Download</FooterLink>
            <FooterLink to='/'>Examples</FooterLink>
            <FooterLink to='/'>FAQ</FooterLink>
            <FooterLink to='/'>solutions</FooterLink>
            <FooterLink to='/'>Legal</FooterLink>
          </FooterLinkItems>
          <FooterLinkItems>
            <FooterLinkTitle>FREE TOOLS</FooterLinkTitle>
            <FooterLink to='/'>Design Blocks</FooterLink>
            <FooterLink to='/'>Online HTML Editor</FooterLink>
            <FooterLink to='/'>Pages</FooterLink>
            <FooterLink to='/'>Image Uploader</FooterLink>
            <FooterLink to='/'>WebTestIt </FooterLink>
          </FooterLinkItems>
        </FooterLinksWrapper>
        <FooterLinksWrapper>
          <FooterLinkItems>
            <FooterLinkTitle>RESOURCE</FooterLinkTitle>
            <FooterLink to='/'>React Grid</FooterLink>
            <FooterLink to='/'>Docs</FooterLink>
            <FooterLink to='/'>Quick Start</FooterLink>
            <FooterLink to='/'>Blog</FooterLink>
            <FooterLink to='/'>Support</FooterLink>
            <FooterLink to='/'>Contact Us</FooterLink>
            <FooterLink to='/'>Case Studies</FooterLink>
            <FooterLink to='/'>Customizer</FooterLink>
          </FooterLinkItems>
          <FooterLinkItems>
            <FooterLinkTitle>GET IN TOUCH</FooterLinkTitle>
            <FooterLink to='/'>support@froala.com</FooterLink>
          </FooterLinkItems>
          <FooterLinkItems>
            <FooterLinkTitle>SIGN UP</FooterLinkTitle>
            <FooterLink to='/'>Instagram</FooterLink>
            <FooterLink to='/'>Facebook</FooterLink>
            <FooterLink to='/'>Youtube</FooterLink>
            <FooterLink to='/'>Twitter</FooterLink>
          </FooterLinkItems>
        </FooterLinksWrapper>
      </FooterLinksContainer>
      <SocialMedia>
        <SocialMediaWrap>
          <SocialLogo to='/'>
            
            <img src={Logo} width="200" alt="logo"/>
          </SocialLogo>
        </SocialMediaWrap>
      </SocialMedia>
    </FooterContainer>
  );
}

export default Footer;
