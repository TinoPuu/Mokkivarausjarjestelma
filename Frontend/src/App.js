import React, { } from "react";
import ".//App.css";
import { BrowserRouter } from "react-router-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Mokki from "./Navisivut/Mokki";
import Navbar from "./comps/Navbar";
import Varaus_lomake from "./Navisivut/Varaus_lomake";
import Footer from "./comps/Footer";
import Muut from "./Navisivut/Muut";
import Kirjautuminen from "./Navisivut/Kirjautuminen";
import Kotisivu from "./Navisivut/Kotisivu";
import Tietoameista from "./Navisivut/Tietoameista";




// Nämä alla olevat lisukkeet tarvitsee, jotta voi runnata appia.
// asenna Firebase, react-router-dom, (motion), + muut tulevat lisäosat 
//npm install react-router-dom@5
//npm install
//npm install firebase
//npm install react-calendar
//npm install express
//npm install body-parser
//npm install styled-components
//npm install react-icons
function App() {

  return (
    <div className="page-container">

      <Router>
      
        <div className="content-wrap">
          <BrowserRouter>
            <Navbar/>
            <Switch>
            <Route exact path='/' component={Kotisivu}  />
            <Route path='/Mokki' component={Mokki} />
            <Route path='/muut' component={Muut} />
            <Route path='/Kirjautuminen' component={Kirjautuminen} />
            <Route path='/Tietoameista' component={Tietoameista} />
            </Switch>
          </BrowserRouter>
          </div>
      </Router>
      <Footer />
      </div>
  );


}

export default App;