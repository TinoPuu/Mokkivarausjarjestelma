import React from 'react';


const Modal = ({ selectedImg, setSelectedImg }) => {

    const handleClick = (e) => {
        if(e.target.classList.contains('Drop')){
        setSelectedImg(null);
        }
    }


    return(
        <div className="Drop" onClick={handleClick}>
            <img src ={selectedImg} alt="large pic"/>
        </div>
        
        
    )
}
export default Modal;