import React from 'react';
import  "../tyylit/Kotisivuasettelu.css";
import Arvioinnit from "../comps/Arvioinnit";


function Kotisivu() {
  
    return(
      
      <div className="App">
        <div className="kotisivu">
          <div className="laatikko">
            <div className="Hello">
              <h1>Etusivu</h1>
              <p>Tervetuloa</p>
            </div>
          </div>
          <div className="laatikko">
            <div className="yritysinfo">
              <p>Tähän tulee yrityksen tietoja</p>
            </div>
          </div>
          <Arvioinnit/>
        </div>
      </div>
        
      
    )
  }
  
  export default Kotisivu;

