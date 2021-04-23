import '../App.css';
import React, { useState } from 'react';
import ImageGrid from '../comps/ImageGrid';
import Modal from '../comps/Modal';
import Kuvatcontainer from '../comps/Kuvatcontainer';
import '../tyylit/Kuvattyyli.css';
import Varaus_lomake from './Varaus_lomake';

function Mokki() {
  const [selectedImg, setSelectedImg] = useState(null);
  return(
    <div className="App">
      <section>
      <h1>Tahkon mökki</h1>
      <Kuvatcontainer/>
      <ImageGrid setSelectedImg={setSelectedImg} />
      { selectedImg && (
        <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
      )}
      <Varaus_lomake/>
      </section>
    </div>
  )
}

export default Mokki;