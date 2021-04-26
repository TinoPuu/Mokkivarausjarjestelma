import React, { Component, useState, useEffect } from 'react';
import { fire, projectStorage, projectFirestore, timestamp } from "../Firebase/config";
import varaus from '../tyylit/varaus.css';
import '../App.css';
import Kalenteri from "./Kalenteri";

function Varaus() {

  const [name, setName] = useState(null)
  const [puh, setPuh] = useState(null)
  const [sposti, setSposti] = useState(null)
  const [day1, setDay1] = useState(null)
  const [month1, setMonth1] = useState(null)
  const [year1, setYear1] = useState(null)
  const [day2, setDay2] = useState(null)
  const [month2, setMonth2] = useState(null)
  const [year2, setYear2] = useState(null)
  
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
  function getDay1(val) {
    setDay1(val.target.value)
    console.warn(val.target.value)
  }
  function getMonth1(val) {
    setMonth1(val.target.value)
    console.warn(val.target.value)
  }
  function getYear1(val) {
    setYear1(val.target.value)
    console.warn(val.target.value)
  }
  function getDay2(val) {
    setDay2(val.target.value)
    console.warn(val.target.value)
  }
  function getMonth2(val) {
    setMonth2(val.target.value)
    console.warn(val.target.value)
  }
  function getYear2(val) {
    setYear2(val.target.value)
    console.warn(val.target.value)
  }


  function Lisays() {
    projectFirestore.collection("Varaukset").doc().set({
      nimi: name,
      puhelin: puh,
      sposti: sposti,
      start: year1 +"-"+month1+"-"+day1,
      end: year2 +"-"+month2+"-"+day2
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
                  <input type="text" placeholder="pp" id="Alku" onChange={getDay1} />
                  <input type="text" placeholder="kk" id="Alku" onChange={getMonth1} />
                  <input type="text" placeholder="vvvv" id="Alku" onChange={getYear1} />
                  </div>
                  <label>Loppupäivämäärä</label>
                  <div class = "grid-item.Osoite">  
                  <input type="text" placeholder="pp" id="Loppu" onChange={getDay2} />
                  <input type="text" placeholder="kk" id="Loppu" onChange={getMonth2} />
                  <input type="text" placeholder="vvvv" id="Loppu" onChange={getYear2} />
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