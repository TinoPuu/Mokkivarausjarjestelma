import '../App.css';
import React, { useState } from 'react';
import ImageGrid from '../comps/ImageGrid';
import Mokkicontainer from '../comps/Mokkicontainer';
import '../tyylit/mokkisivu.css';
import Varaus_lomake from './Varaus_lomake';
import Modal from '../comps/Modal';
function Mokki() {
  const [selectedImg, setSelectedImg] = useState(null);
  return(
    <div className="App">
      <div className="mokkilaatikko">
      <section>
      <h1>Tahkon mökki</h1>
      <Mokkicontainer/>
      <ImageGrid setSelectedImg={setSelectedImg}/>
     {selectedImg &&<Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg}/>}
      </section>
      <Varaus_lomake/>
      </div>
      
    </div>
  )
}

export default Mokki;