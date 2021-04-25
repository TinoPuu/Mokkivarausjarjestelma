import React, { useState, useEffect } from 'react';
import { fire, projectStorage, projectFirestore, timestamp, } from "../Firebase/config";
import '../tyylit/muut.css';

function Muut() {
    const[tuotteet, setTuotteet] = useState([]);
    
    function haetuotteet(){
        const ref = projectFirestore.collection("MuutTuotteet");
        ref.onSnapshot((querySnapshot) => {
            const items = [];
            querySnapshot.forEach((doc) =>{
              items.push(doc.data());
            })
            setTuotteet(items);
      })
    }
    
    useEffect(() => {
        haetuotteet();
    }, [])
    
    return(
        <section classname="muutlaatikko">
            <div>
                <div>
                    <h1 classname="otsikko">Muut tuotteet</h1>
                {tuotteet.map((tuote) => (
                    <table className="poyta" key={tuote.id}>
                        <tr>
                            <td><h4>{tuote.nimi} </h4></td>
                            <td><h6>Hinta: {tuote.hinta}</h6> </td>
                            <td><h6>{tuote.tiedot} </h6></td>
                        </tr>
                    </table>
                ))}
                </div>
                
            </div>
        </section>
            
      
    )
  }
  export default Muut;