import React, { } from "react";
import ".//App.css";
import { BrowserRouter } from "react-router-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Kuvat from "./Navisivut/Kuvat";
import Navbar from "./Navisivut/Navbar";
import Varaus_lomake from "./Navisivut/Varaus_lomake";
import Footer from "./comps/Footer";
import Muut from "./Navisivut/Muut";
import Kirjautuminen from "./Navisivut/Kirjautuminen";
import Kotisivu from "./Navisivut/Kotisivu";




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
            <Navbar />
            <Switch>
            <Route path='/Kotisivu' component={Kotisivu} />
            <Route path='/kuvat' component={Kuvat} />
            <Route path='/varaus_lomake' component={Varaus_lomake} />
            <Route path='/muut' component={Muut} />
            <Route path='/Kirjautuminen' component={Kirjautuminen} />
            </Switch>
          </BrowserRouter>
          </div>
      </Router>
      <Footer />
      </div>
  );


}

export default App;