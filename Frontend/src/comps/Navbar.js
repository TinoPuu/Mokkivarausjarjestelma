import React from 'react';

import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink,
    NavHeader
  } from './NavbarElements';


const Navbar = () => {
    return (
        <>
            <Nav>

                <NavHeader to='/'>
                    <h4>Varausjärjestelmä</h4>
                </NavHeader>
                <Bars />
                <NavMenu>
                    <NavLink to="/Mokki" activeStyle>
                         Mökki
                    </NavLink>
                    <NavLink to="/Muut" activeStyle>
                         Muut tuotteet
                    </NavLink>
                    <NavLink to="/Tietoameista" activeStyle>
                         Tietoja meistä
                    </NavLink>
                </NavMenu>


                <NavBtnLink to="/Kirjautuminen">Kirjautuminen</NavBtnLink>


            </Nav>
        </>
    );
};



export default Navbar;