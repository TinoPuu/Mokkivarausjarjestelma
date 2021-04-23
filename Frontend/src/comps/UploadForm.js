import React, { useState } from 'react';
import ProgressBar from './ProgressBar';

const UploadForm = () => {
    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);
    const types = ['image/png', 'image/jpeg'];

    //tällä funktiolla näkee jos on tapahnut aktiviteettia
    const changeHandler = (e) => {
        let selected = e.target.files[0];

        if (selected && types.includes(selected.type)) {
            setFile(selected); //jos otettu tietotyyppi on oikea niin tulee tyhjä error
            setError('');
        } else {
            setFile(null); // jos joku muu kuin png tai jpeg => Tulee tämä
            setError('Please select an image file (png or jpeg)');
        }
    }
    // file && <ProgressBar/> toimii, jos file = true => ProgressBar
    return (
        <form>
            <input type="file" onChange={changeHandler} />
            <div className="output">
                {error && <div className="error">{error}</div>}
                {file && <div>{file.name}</div>}
                {file && <ProgressBar file={file} setFile={setFile} />}
            </div>
        </form>
    )// file.name näyttää uudelleen saman tekstin valitse tiedoston alla

}
export default UploadForm;