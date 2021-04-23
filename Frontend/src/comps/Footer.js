import React from 'react';
import "../tyylit/Footer.css";
import { BrowserRoute, Link, NavLink } from "react-router-dom";
import Kirjautuminen from "../Navisivut/Kirjautuminen";

const Footer = () => {

    return (
        /*#C62828 og väri*/
        <div className="main-footer">
            <div className="container">
                <div className="row">
                    {/*column1*/}
                    <div className="col">
                        <h4>Yhteystiedot</h4>
                        <ul className="list-unstyled">
                            <li>044-1234354</li>
                            <li>Kuopio</li>
                            <li>Koivukuja 6</li>
                        </ul>
                    </div>
                    {/*column2*/}
                    <div className="col">
                        <h4>Tietoa meistä</h4>
                    </div>
                    {/*column3*/}
                    <div className="col">

                    </div>
                </div>
                <hr />
                <div className="row">
                    <p className="col-sm">
                        &copy;{new Date().getFullYear()} Varausjärjestelmä Oy |
                        </p>
                </div>
            </div>
        </div>
    )
}
Footer.propTypes = {};

export default Footer;