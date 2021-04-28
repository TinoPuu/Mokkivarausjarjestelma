import React, { Component, useState, useEffect } from 'react';
import { fire, projectStorage, projectFirestore, timestamp } from "../Firebase/config";
import '../tyylit/varaus.css';
import '../App.css';



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

    //päivämäärän muodon varmistus
    var tarkistus1 = day1;
    var a1 = tarkistus1.length;
    var tarkistus2 = month1;
    var a2 = tarkistus2.length;
    var tarkistus3 = year1;
    var a3 = tarkistus3.length;

    var tarkistus4 = day2;
    var l1 = tarkistus4.length;
    var tarkistus5 = month2;
    var l2 = tarkistus5.length;
    var tarkistus6 = year2;
    var l3 = tarkistus6.length;


    if(a1<3&&a2<3&&a3<5&&l1<3&&l2<3&&l3<5&&year1>2020&&year2>2020&&month1<13&&month2<13&&day1<32&&day2<32){
      if(day1<day2 || (month1<month2&&day2<day1) || year1<year2){
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
    else
    window.alert("Anna käypä ajanjakso!");
  }
    else
    window.alert("Anna käyvät päivämäärät!");
  }

  return (
    <div className="App">
      {
        varaukset && varaukset.map(varaus => {
          return (
            <div id="varaus-container">
              <div class="grid-item">
              <h5>Tee varaus:</h5> 
                  <label>Nimi</label>
                <div class = "grid-item.nimi">  
                <input type="text" id="Nimi" onChange={getName} />
                </div>
                  <label>Puhelinnumero</label>
                  <div class = "grid-item.Puh">  
                <input type="number" id="Puh" onChange={getPuh} />
                  </div>
                  <label>Sähköposti</label>
                  <div class = "grid-item.Osoite">  
                <input type="text" id="Sposti" onChange={getSposti} />
                  </div>

                  <label>Alkupäivämäärä</label>

                  <div class="container">
                  
                  <div id = "textbox1">   
                  <input type="number" placeholder="pp" id="D1" onChange={getDay1} />
                  </div>
                  <div id = "textbox1"> 
                  <input type="number" placeholder="kk" id="M1" onChange={getMonth1} />
                  </div>
                  <div id = "textbox1"> 
                  <input type="number" placeholder="vvvv" id="Y1" onChange={getYear1} />                 
                  </div>
                  </div>

                  <br></br>

                  <label >Loppupäivämäärä</label> 

                  <div class="container">         
                  
                  <div id = "textbox2"> 
                  <input type="number" placeholder="pp" id="D2" onChange={getDay2} />
                  </div>
                  <div id = "textbox2">
                  <input type="number" placeholder="kk" id="M2" onChange={getMonth2} />
                  </div>
                  <div id = "textbox2"> 
                  <input type="number" placeholder="vvvv" id="Y2" onChange={getYear2} />
                  </div>      
                  </div>               
                
              </div>
              <button onClick={Lisays}>Tee uusi varaus</button>
            </div>            
          )
        })       
      }    
    </div>
  );
}

export default Varaus;