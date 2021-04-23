import '../App.css';
import { fire, projectStorage, projectFirestore, timestamp, } from "../Firebase/config";
import React,{useState,useEffect} from 'react';
import UploadForm from '../comps/UploadForm';
import firebase from 'firebase'
import '../App.css';
import EventCalendar from './EventCalendar';





 // tämä on Mökki (Kuvat sivujen text grid-container versio alpha 0.011)
function Kuvatcontainer() {

const[mokki, setMokki] = useState([]);
const ref = projectFirestore.collection("Mokkiteksti");

function getMokki(){
  ref.onSnapshot((querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) =>{
          items.push(doc.data());


      })
      setMokki(items);
  })
}

useEffect(() => {
  getMokki();
}, []); 

  return(
    <div className="grid-container">
              
            {mokki.map((mokin_teksti) => (
                <div key={mokin_teksti.id}>
                    <p>{mokin_teksti.teksti}</p>
                </div>
            ))}
    </div>
  )
}

export default Kuvatcontainer;