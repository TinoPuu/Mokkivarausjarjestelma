import React from 'react';
import Kotisivuasettelu from "../tyylit/Kotisivuasettelu.css";
import Arvioinnit from "../comps/Arvioinnit";


function Kotisivu() {
  
    return(
      
      <div className="App">
        <div className="kotisivu">
        <div className="Hello">
        <h1>Etusivu</h1>
        <p>Tervetuloa</p>
        </div>
        <Arvioinnit/>
      </div>
        </div>
        
      
    )
  }
  
  export default Kotisivu;

