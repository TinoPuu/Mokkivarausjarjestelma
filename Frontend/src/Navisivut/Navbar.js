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
                    <NavLink to="/Kotisivu" activeStyle>
                        Koti
                    </NavLink>
                    <NavLink to="/Kuvat" activeStyle>
                         Mökki
                    </NavLink>
                    <NavLink to="/Varaus_lomake" activeStyle>
                         Varaus
                    </NavLink>
                    <NavLink to="/Muut" activeStyle>
                         Muut
                    </NavLink>
                </NavMenu>


                <NavBtnLink to="/Kirjautuminen">Kirjautuminen</NavBtnLink>


            </Nav>
        </>
    );
};



export default Navbar;