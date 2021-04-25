import '../App.css';
import { fire, projectStorage, projectFirestore, timestamp, } from "../Firebase/config";
import React,{useState,useEffect} from 'react';
import '../App.css';
// tämä on Mökki (Kuvat sivujen text grid-container versio alpha 0.011)
function Mokkicontainer() {

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
                    <h6>{mokin_teksti.teksti}</h6>
                </div>
            ))}
    </div>
  )
}

export default Mokkicontainer;