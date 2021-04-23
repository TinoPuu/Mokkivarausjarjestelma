import '../App.css';
import React, { useState } from 'react';
import UploadForm from '../comps/UploadForm';
import ImageGrid from '../comps/ImageGrid';
import Modal from '../comps/Modal';
import Kuvatcontainer from '../comps/Kuvatcontainer';
import Kuvattyyli from '../tyylit/Kuvattyyli.css';
import Varaus_lomake from './Varaus_lomake';

function Mokki() {
  const [selectedImg, setSelectedImg] = useState(null);
  return(
    <div className="App">
      <h1>Tahkon mökki</h1>
      <Kuvatcontainer/>
      <ImageGrid setSelectedImg={setSelectedImg} />
      { selectedImg && (
        <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
      )}
      <Varaus_lomake/>
    </div>
  )
}

export default Mokki;