import React, { Component, useState, useEffect } from 'react';
import { fire, projectStorage, projectFirestore, timestamp } from "../Firebase/config";
import varaus from '../tyylit/varaus.css';
import '../App.css';
import Kalenteri from "./Kalenteri";

function Varaus() {

  const [name, setName] = useState(null)
  const [puh, setPuh] = useState(null)
  const [sposti, setSposti] = useState(null)
  const [start, setStart] = useState(null)
  const [end, setEnd] = useState(null)
  
  const [varaukset, setVaraukset] = useState([])
  const fetchVaraukset = async () => {
    const response = projectFirestore.collection('Varaukset');
    const data = await response.get();
    data.docs.forEach(item => {
      setVaraukset([...varaukset, item.data()])
    })
  }
  useEffect(() => {
    fetchVaraukset();
  }, [])

  function getName(val) {
    setName(val.target.value)
    console.warn(val.target.value)
  }
  function getPuh(val) {
    setPuh(val.target.value)
    console.warn(val.target.value)
  }
  function getSposti(val) {
    setSposti(val.target.value)
    console.warn(val.target.value)
  }
  function getEnd(val) {
    setEnd(val.target.value)
    console.warn(val.target.value)
  }
  function getStart(val) {
    setStart(val.target.value)
    console.warn(val.target.value)
  }


  function Lisays() {
    projectFirestore.collection("Varaukset").doc().set({
      nimi: name,
      puhelin: puh,
      sposti: sposti,
      start: start,
      end: end
    })
      .then(() => {
        console.log("Document successfully written!");
      })
      .catch((error) => {
        console.error("Error writing document: ", error);
      });
    }

  return (
    <div className="App">
      {
        varaukset && varaukset.map(varaus => {
          return (
            <div className="varaus-container">
              <div class="grid-item">
              <h5>Tee varaus:</h5> 
                  <label>Nimi</label>
                <div class = "grid-item.nimi">  
                <input type="text" id="Nimi" onChange={getName} />
                </div>
                  <label>Puhelinnumero</label>
                  <div class = "grid-item.Puh">  
                <input type="text" id="Puh" onChange={getPuh} />
                  </div>
                  <label>Sähköposti</label>
                  <div class = "grid-item.Osoite">  
                <input type="text" id="Sposti" onChange={getSposti} />
                  </div>
                  <label>Alkupäivämäärä</label>
                  <div class = "grid-item.Osoite">  
                <input type="text" id="Alku" onChange={getStart} />
                  </div>
                  <label>Loppupäivämäärä</label>
                  <div class = "grid-item.Osoite">  
                <input type="text" id="Loppu" onChange={getEnd} />
                  </div>
                  
                <button onClick={Lisays}>Tee uusi varaus</button>
              </div>
            </div>
          )
        })
      }
    </div>
  );
}

export default Varaus;