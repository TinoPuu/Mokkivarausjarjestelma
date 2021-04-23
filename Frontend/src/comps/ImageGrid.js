
import React from 'react';
import useFirestore from '../hooks/useFirestore';
import { motion } from 'framer-motion';
// tää on fancympi versio
const ImageGrid = ({ setSelectedImg }) => {
    const { docs } = useFirestore('images'); // tämä on Firebase picturecollectionin nimi //docs palauttaa kaikki kuvat mitä on tietokannassa
    //tätä vaihtamalla voidaan esim louda pakettiautolle oma folderi ja mökille oma --> tämä tulee siis cloud Firestoreen näkyviin
    return (
        <div className="img-grid">
            {docs && docs.map(doc => (
                <motion.div className="img-wrap" key={doc.id} //doc.id On arrayn uniikki documentin key value voidaan tarkastaa laittamalla console.log(docs);
                    layout
                    whileHover={{ opacity: 1 }}
                    onClick={() => setSelectedImg(doc.url)}
                >
                    <motion.img src={doc.url} alt="Uploaded-picture"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1 }}
                    />

                </motion.div>
            ))}
        </div>
    )

    /*
    const ImageGrid = ({ setSelectedImg }) => {
     const { docs } = useFirestore('images');
     return (
         <div className="img-grid">
             {docs && docs.map(doc => (
 
 
                 <img src={doc.url} alt="Uploaded-picture" />
                       
              
     ))
 }
         </div >
     )
     */
}

export default ImageGrid;