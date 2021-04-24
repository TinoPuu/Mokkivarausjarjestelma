import '../App.css';
import Kotisivuasettelu from "../tyylit/Kotisivuasettelu.css";
import React, { Component, useState, useEffect } from 'react';
import { fire, projectStorage, projectFirestore, timestamp } from "../Firebase/config";

// tämä on Mökki (Kuvat sivujen text grid-container versio alpha 0.011)
function Arvioinnit() {

    const [arvosteluteksti, setArvosteluteksti] = useState([null]);

    function getArvosteluteksti(val) {
        setArvosteluteksti(val.target.value)
        console.warn(val.target.value)
      }
    function Arvostelu_lisays () {

        projectFirestore.collection("Arvostelut").doc().set({
            teksti: arvosteluteksti,
          })
            .then(() => {
              console.log("Document successfully written!");
            })
            .catch((error) => {
              console.error("Error writing document: ", error);
            });
    }  

    return (
        <div className="grid-palaute">
            <div class="grid-item">
                <h2>Feedback</h2>
                <p>"Hyvä mökki hienolla paikalla. Suosittelen mökkiä varsinkin talviaikaan!"</p>
            </div>
            <div>
            <input type="text" id="Aika2" onChange={getArvosteluteksti} />
                <button onClick={Arvostelu_lisays}>Lähetä uusi arvostelu!</button>
            </div>
        </div>
    )
}

export default Arvioinnit;