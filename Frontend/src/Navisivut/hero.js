import react from 'react';
import { fire, projectStorage, projectFirestore, timestamp, } from "../Firebase/config";
import React, { useState, useEffect } from 'react';
import UploadForm from '../comps/UploadForm';
import firebase from 'firebase'
import '../App.css';
import EventCalendar from './EventCalendar';
import axios from "axios";

const Hero = ({ handleLogout }) => {

  const [varaukset, setVaraukset] = useState([]);

  const [mokkiteksti, setMokkiteksti] = useState([null]);

  const [mokkiteksti_uusi, setMokkiteksti_uusi] = useState(null)


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
    //String id = projectFirestore.collection("collection_name").document().getId();
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


  const ref = projectFirestore.collection("Varaukset");

  /* function getVaraukset(){
       ref.onSnapshot((querySnapshot) => {
           const items = [];
           querySnapshot.forEach((doc) =>{
               items.push(doc.data());


           })
           setVaraukset(items);
       })
   }
*/

  function getVaraukset() {
    console.log("testi");
    axios.get("http://localhost:5000/Varaukset").then(function (response) {
      setVaraukset(response.data);


    })
  }




  useEffect(() => {
    getVaraukset();
  }, []);

  return (
    <section className="hero">

      <div>
        <h1>Varaukset</h1>
        {varaukset.map((varaus) => (
          <div key={varaus.id}>
            <li>{varaus.nimi} / {varaus.puhelin} / {varaus.ajanjakso}</li>
          </div>
        ))}
      </div>

      <h2> Tervetuloa</h2>
      <div>
        <div className="mokin_teksti">
          {

            <div className="mokkiteksti-container">
              <div class="grid-item">
                <label>teksti</label>
                <div class="grid-item.nimi">
                  <input type="text" id="Mokki" onChange={getMokkiteksti_uusi} />
                  <p>{mokkiteksti_uusi}</p>
                </div>
                <button onClick={Lisays_mokkiteksti}>Päivitä teksti</button>
              </div>
            </div>


          }
        </div>
      </div>
      <div>
        <p>Lisää kuvia mökistä</p>
        <UploadForm />
        <br />
      </div>
      <div>

        <EventCalendar

        />
      </div>


      <button onClick={handleLogout}>
        kirjaudu ulos
                </button>

    </section>
  );
};

export default Hero;