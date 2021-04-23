import React from 'react';
import Kotisivuasettelu from "../Navisivut/Kotisivuasettelu.css";
import Kotisivuextension from "./Kotisivuextension";


function Kotisivu() {
  
    return(
      
      <div className="App">
        <div className="Hello">
        <h1>Etusivu</h1>
        <p>Tervetuloa</p>
        </div>
        <Kotisivuextension/>
      </div>
      
    )
  }
  
  export default Kotisivu;

