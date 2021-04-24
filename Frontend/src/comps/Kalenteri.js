import React, {useState, useEffect} from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import "../App.css";
import { fire, projectStorage, projectFirestore, timestamp, } from "../Firebase/config";

function Kalenteri(){
  const[varaukset, setVaraukset] = useState([]);
  const ref = projectFirestore.collection("Varaukset");
  
  function getVaraukset(){
      ref.onSnapshot((querySnapshot) => {
            const items = [];
            querySnapshot.forEach((doc) =>{
              items.push(doc.data());
            })
            setVaraukset(items);
      })
    }
    
    useEffect(() => {
      getVaraukset();
  }, []); 

  return (
    <section className="kalenteri">
      <div className= "kalenteridivi" >
        <h1>Kalenteri</h1>
        <FullCalendar
          plugins={[ dayGridPlugin ]}
          initialView="dayGridMonth"
          events={varaukset}
        />
      </div>
    </section>
  );

}



export default Kalenteri;