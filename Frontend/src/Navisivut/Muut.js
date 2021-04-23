
import firebase from "firebase/app";
import React, { useState, useEffect } from 'react';
import "../tyylit/muutTyyli.css";




const Muut = () => {

return(
    <div className="grid">
    <div className="item1">
    <h4>Peräkärry</h4>
    <img src="https://top-mainokset.net/images/adspic/pic-201708074040-5698935.jpg"></img>
    <p>Hinta: 20e/päivä</p>
    </div>

    <div className="item2">
    <h4>Pakettiauto</h4>
    <img src="https://www.nettiauto.com/extra/images/mercedes-benz-vito-2.jpg"></img>
    <p>Uusi MB Vito</p>
    </div>
</div>


)

/*const db = firebase.firestore(); //yhteys firestore collectioniin
    const [tuotteet, setTuotteet] = useState([])
    const haeTiedot = async () => {
        const response = db.collection('tuotteet');
        const data = await response.get(); //odottaa vastausta ja tallentaa sen dataan
        data.docs.forEach(item => {
            setTuotteet([tuotteet, item.data()])
        })
    }
    useEffect(() => {
        haeTiedot();
    }, [])

    return (

        <div className="Tuotteet">
            {
                tuotteet.map(tuote => {
                    return (
                        <div className="tuote-sisalto">
                            <h4>{tuote.nimi}</h4>
                            <img src={tuote.kuva}></img>
                            <p>{tuote.tiedot}</p>
                        </div>
                    )
                })
            }
        </div>
    );*/
}
export default Muut;