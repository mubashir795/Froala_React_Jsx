import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Nunito', sans-serif;
 } 
 

/* Home-page */

h1.main-heading {
  text-align: center;
  margin-top: 100px;
  margin-bottom: 50px;
  font-size: 42px;
}
p.main-des {
  text-align: center;
  font-size: 22px;

}
.button {
  display: flex;
  margin-bottom: 100px;
  margin-top: 100px;
  justify-content: center;
}
a.btn-explore {
  margin-right: 10px;
}
a.btn-inline-ex {
  font-size: 20px;
  padding: 20px 30px;
  color: #252525;
  border-color: #ffffff;
  background: #ffffff;
  box-shadow: 0 1px 3px rgb(0 0 0 / 12%), 0 1px 2px rgb(0 0 0 / 24%) !important;
}
a.btn-inline-down {
  font-size: 20px;
  padding: 20px 30px;
  color: #ffffff;
  border-color: #0098f7;
  background: #0098f7;
  box-shadow: 0 1px 3px rgb(0 0 0 / 12%), 0 1px 2px rgb(0 0 0 / 24%) !important;
}
.feature-img {
  text-align: center;
}
p.text-bold {
  font-size: 20px;
  font-weight: 700;
  color: #515151;
  text-align: center;
  margin-top: 50px;
}
section.bg-color {
  margin-top: 100px;
  background: #f5f5f5;
  padding: 100px;
}
p.text-froala {
  text-align: center;
  font-size: 33px;
  color: #353535;
  margin-bottom: 50px;
}
.froala-section {
  display: flex;
}
.img-1 {
  width: 33.33333333%;
}
.img-2 {
  width: 33.33333333%;
}
.img-3 {
  width: 33.33333333%;
}
p.edit-title {
  font-size: 20px;
  font-weight: 700;
  color: #353535;
  padding-top: 15px;
}
p.edit-des {
  width: 80%;
  font-size: 16px;
  color: #515151;
  margin-top: 15px;
}
p.inline-title {
  font-size: 27px;
  color: #353535;
  margin-left: 50px;
  padding-top: 10px;
  margin-bottom: 30px;
}
p.inline-des {
  color: #515151;
  font-size: 16px;
  margin-bottom: 50px;
  margin-left: 50px;
}
a.inline-btn {
  color: #fff;
  background: #0098F7;
  border-radius: 2px 2px 2px 2px;
  padding: 12px 24px 12px 24px;
  margin-left: 50px;
}
.inline {
  margin-top: 80px;
  margin-bottom: 80px;
}
section.block-sec {
  padding: 50px;
  box-shadow: 0 11px 15px -7px rgb(0 0 0 / 20%), 0 24px 38px 3px rgb(0 0 0 / 14%), 0 9px 46px 8px rgb(0 0 0 / 12%);
}
.space-img {
  margin-left: 20px;
  margin-right: 20px;
  margin-top: 90px;
}
p.get-started {
  text-align: center;
  font-size: 33px;
  color: #353535;
  margin-top: 100px;
  margin-bottom: 20px;
}
p.heading-des {
  font-size: 22px;
  text-align: center;
  color: #515151;
  line-height: 1.5em;
  margin-bottom: 20px;
}
p.text-small {
  text-align: center;
}
.plan-btn-style {
  text-align: center;
  margin-top: 50px;
  margin-bottom: 50px;
}
a.plan-btn {
  color: #fff;
  background: #0098F7;
  border-radius: 2px 2px 2px 2px;
  padding: 12px 24px 12px 24px;
}


`;

export const Container = styled.div`
  z-index: 1;
  width: 100%;
  max-width: 1300px;
  margin-right: auto;
  margin-left: auto;
  padding-right: 50px;
  padding-left: 50px;

  @media screen and (max-width: 991px) {
    padding-right: 30px;
    padding-left: 30px;
  }
`;


export const Button = styled.button`
  border-radius: 4px;
  background: ${({ primary }) => (primary ? '#0198f7' : '#0198f7')};
  white-space: nowrap;
  padding: ${({ big }) => (big ? '12px 64px' : '10px 20px')};
  color: #000;
  font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
  outline: none;
  border: none;
  cursor: pointer;

  &:hover {
    transition: all 0.3s ease-out;
    background: #fff;
    background-color: ${({ primary }) => (primary ? '#0198f7' : '#0198f7')};
  }

  @media screen and (max-width: 960px) {
    width: 100%;
  }

`;

export default GlobalStyle;