import react from 'react';
import { fire, projectStorage, projectFirestore, timestamp, } from "../Firebase/config";
import React, { useState, useEffect } from 'react';
import UploadForm from '../comps/UploadForm';
import firebase from 'firebase'
import '../App.css';
import EventCalendar from '../comps/Kalenteri';
import axios from "axios";
import '../tyylit/varauspoyta.css';

const Hero = ({ handleLogout }) => {

  const [varaukset, setVaraukset] = useState([]);
  const [arvostelut, setArvostelut] = useState([]);
  const [mokkiteksti, setMokkiteksti] = useState([null]);
  const [mokkiteksti_uusi, setMokkiteksti_uusi] = useState(null)
  const [uusituotenimi, setUusituotenimi] = useState(null);
  const [uusituotehinta, setUusituotehinta] = useState(null);
  const [uusituotetiedot, setUusituotetiedot] = useState(null);
  const [tuotteet, setTuotteet] = useState([]);
  
  

  
  const fetchMokkiteksti = async () => {
    const response = projectFirestore.collection('Mokkiteksti');
    const data = await response.get();
    data.docs.forEach(item => {
      setMokkiteksti([...mokkiteksti, item.data()])
    })
  }

  useEffect(() => {
    fetchMokkiteksti();
  }, [])

  function getMokkiteksti_uusi(val) {
    setMokkiteksti_uusi(val.target.value)
    console.warn(val.target.value)
  }

  function Lisays_mokkiteksti() {
    projectFirestore.collection("Mokkiteksti").doc("RYY1oBpq5JTlp2xT6TbZ").update({
      teksti: mokkiteksti_uusi,
    })
      .then(() => {
        console.log("Document successfully written!");
      })
      .catch((error) => {
        console.error("Error writing document: ", error);
      });
  }

  function hyvaksyttyarvostelu(teksti){
    projectFirestore.collection("H_Arvostelut").doc().set({
      teksti: teksti,
    })
      .then(() => {
        console.log("Document successfully written!");
      })
      .catch((error) => {
        console.error("Error writing document: ", error);
      });
      poistaarvostelu(teksti);
    }
  
  

  function getVaraukset() {
    const ref = projectFirestore.collection("Varaukset");
    axios.get("http://localhost:5000/Varaukset").then(function (response) {
      setVaraukset(response.data);
    })
  }
  function getArvostelut() {
    const ref = projectFirestore.collection("Arvostelut");
    axios.get("http://localhost:5000/Arvostelut").then(function (response) {
      setArvostelut(response.data);
    })
    console.log("hakee arvostelut");
    console.log(arvostelut);
  }

  function getTuotteet(){
    const ref = projectFirestore.collection("MuutTuotteet");
    ref.onSnapshot((querySnapshot) => {
        const items = [];
        querySnapshot.forEach((doc) =>{
          items.push(doc.data());
        })
        setTuotteet(items);
  })
}

  function poistavaraus(poistettavannimi){
    console.log(poistettavannimi)
    var jobskill_query = projectFirestore.collection('Varaukset').where('nimi','==',poistettavannimi);
    jobskill_query.get().then(function(querySnapshot) {
      querySnapshot.forEach(function(doc) {
        doc.ref.delete();
      });
    });
  }
  function poistaarvostelu(teksti){
    var jobskill_query = projectFirestore.collection('Arvostelut').where('teksti','==',teksti);
    jobskill_query.get().then(function(querySnapshot) {
      querySnapshot.forEach(function(doc) {
        doc.ref.delete();
      });
    });
  }
  function poistatuote(nimi){
    var jobskill_query = projectFirestore.collection('MuutTuotteet').where('nimi','==',nimi);
    jobskill_query.get().then(function(querySnapshot) {
      querySnapshot.forEach(function(doc) {
        doc.ref.delete();
      });
    });
  }
  function tuotteenlisays() {
    projectFirestore.collection("MuutTuotteet").doc().set({
      nimi: uusituotenimi,
      hinta: uusituotehinta,
      tiedot: uusituotetiedot,
      
    })
      .then(() => {
        console.log("Document successfully written!");
      })
      .catch((error) => {
        console.error("Error writing document: ", error);
      });
    }


    function getUusituotenimi(val) {
      setUusituotenimi(val.target.value)
      console.warn(val.target.value)
    }
    function getUusituotehinta(val) {
      setUusituotehinta(val.target.value)
      console.warn(val.target.value)
    }
    function getUusituotetiedot(val) {
      setUusituotetiedot(val.target.value)
      console.warn(val.target.value)
    }
  
  useEffect(() => {
    getArvostelut();
    getVaraukset();
    getTuotteet()
  }, []);

  return (
    <section className="hero">
      <div classname="kirjautunutlaatikko">
      <h1>Varaukset</h1>
      <div class="ex1">
        <table class ="poyta">
              <tr>
                <th>Nimi</th>
                <th>puhnro</th>
                <th>Sähköposti</th>
                <th></th>
                <th>Aikaväli</th>
                <th></th>
              </tr>
        </table>
        
        <div class="table-wrapper-scroll-y my-custom-scrollbar">
          {varaukset.map((varaus) => (
            <table class="table table-bordered table-striped mb-0" key={varaus.id}>
              <tr>
                <td>{varaus.nimi} </td>
                <td>{varaus.puhelin} </td>
                <td>{varaus.sposti} </td>
                <td></td>
                
                <td>Alku: {varaus.start} Loppu: {varaus.end} </td>
                <td><button onClick={() => poistavaraus(varaus.nimi)}>Poista</button></td>
              </tr>
            </table>
          ))}
        </div>
      </div>


      <div className="kalenteri">
        <EventCalendar/>
      </div>
        <h1>Uudet Arvostelut</h1>
      <div class="table-wrapper-scroll-y my-custom-scrollbar">
          {arvostelut.map((arvostelut) => (
            <table class="table table-bordered table-striped mb-0" key={arvostelut.id}>
              <tr>
                <td>{arvostelut.teksti}</td>
                <td><button onClick={() => hyvaksyttyarvostelu(arvostelut.teksti)}>Lisää</button></td>
                <td><button onClick={() => poistaarvostelu(arvostelut.teksti)}>Poista</button></td>
              </tr>
            </table>
          ))}
        </div>
        <h1>Tuotteet</h1>
      <div class="table-wrapper-scroll-y my-custom-scrollbar">
          {tuotteet.map((tuotteet) => (
            <table class="table table-bordered table-striped mb-0" key={tuotteet.id}>
              <tr>
                <td>{tuotteet.nimi}</td>
                <td>{tuotteet.hinta}</td>
                <td>{tuotteet.tiedot}</td>
                <td><button onClick={() => poistatuote(tuotteet.nimi)}>Poista</button></td>
              </tr>
            </table>
          ))}
        </div>
        <div className="asd">
          <div class="grid-item">
            <h5>Lisää uusi tuote</h5>
            <label>Tuote</label>
            <div class = "grid-item.nimi">
              <input type="text" id="Nimi" onChange={getUusituotenimi} />
              </div>
              <label>hinta</label>
              <div class = "grid-item.Puh">
                <input type="text" id="Puh" onChange={getUusituotehinta} />
              </div>
              <label>Tiedot</label>
              <div class = "grid-item.Osoite">
                <input type="text" id="Aika" onChange={getUusituotetiedot} />
              </div>
                <button onClick={tuotteenlisays}>Lisää uusi tuote</button>
              </div>
            </div>
            
            <div className="mokin_teksti">
          {
            <div className="mokkiteksti-container">
              <div class="grid-item">
                <h6>Muuta mökin kuvausta</h6>
                <div class="grid-item.nimi">
                  <input type="text" id="Mokki" onChange={getMokkiteksti_uusi} />
                  <p>{mokkiteksti_uusi}</p>
                </div>
                <button onClick={Lisays_mokkiteksti}>Päivitä teksti</button>
              </div>
            </div>
          }
      </div>
      <div>
        <h5>Lisää kuvia mökistä valitsemalla tiedosto</h5>
        <UploadForm />
        <br/>
        </div>
      <button className= "kirjaudu-ulos" onClick={handleLogout} >
        kirjaudu ulos
      </button>
      </div>
    </section>
  );
};

export default Hero;