import { FaBars } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

/*navbar flex pohja*/
export const Nav = styled.nav `
  background-color:rgb(16, 69, 107);
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1000px) / 2);
  z-index: 10;
  /* justify-content: flex-start; */
`;

/*linkit*/
export const NavLink = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &.active {
    color: #15cdfc;
  }
`;

/* Logo/varausjärjestelmän nimi*/
export const NavHeader = styled(Link)` 
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  margin-right: 50px;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &.active {
    color: #15cdfc;
  }
`;

export const Bars = styled(FaBars)`
  display: none;
  color: #fff;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;
  width: 100vw;
  white-space: nowrap; 
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

/* kirjautuminen*/ 
export const NavBtnLink = styled(Link)`
display: flex;
align-items: center;
margin-right: 24px;
background-color:rgb(16, 69, 107);
border-radius: 4px;
background: #256ce1;
padding: 10px 22px;
color: #fff;
outline: none;
border: none;
cursor: pointer;
transition: all 0.2s ease-in-out;
text-decoration: none;
margin-left: 24px;
&:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
`;