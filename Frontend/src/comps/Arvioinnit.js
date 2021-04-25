import '../tyylit/Kotisivuasettelu.css';
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
    


const[arv, setArv] = useState([]);
const ref = projectFirestore.collection("H_Arvostelut");

function getArv(){
  ref.onSnapshot((querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) =>{
          items.push(doc.data());
        })
      setArv(items);
  })
}

useEffect(() => {
  getArv();
}, []); 

    return (
    
      <div className="laatikko">
      
      <div className="arvostelut">
      <h1>Arvostelut</h1> 
      {arv.map((arvostelu_teksti) => (
            <div key={arvostelu_teksti.id}>
                <h5 className="arvostelutteksti">{arvostelu_teksti.teksti}</h5>
                
            </div>
        ))}
        <input type="text" id="Aika2" onChange={getArvosteluteksti} />
        <button onClick={Arvostelu_lisays}>Lähetä uusi arvostelu!</button>
        </div>
        
      </div>
    
    )
}

export default Arvioinnit;