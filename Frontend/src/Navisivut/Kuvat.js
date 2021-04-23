import '../App.css';
import React, { useState } from 'react';
import UploadForm from '../comps/UploadForm';
import ImageGrid from '../comps/ImageGrid';
import Modal from '../comps/Modal';
import Kuvatcontainer from '../Navisivut/Kuvatcontainer';
import Kuvattyyli from '../Navisivut/Kuvattyyli.css';
import Varaus_lomake from '../Navisivut/Varaus_lomake';

function Kuvat() {
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

export default Kuvat;