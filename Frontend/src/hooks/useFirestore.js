import { useState, useEffect } from 'react';
import { projectFirestore } from '../Firebase/config';
// Tällä hookilla haetaan kuvat Firebasesta
const useFirestore = (collection) => { //hookki useFirestore = Kollektioni (kuvat)
  const [docs, setDocs] = useState([]);

  useEffect(() => { //callback funktio
    const unsub = projectFirestore.collection(collection) //otataan collectioni images
      .orderBy('createdAt', 'desc') // createdAt on Timestampin property ja desc tarkoittaa sitä, että otetaan asiat uusimmasta vanhimpaan järjestyksessä
      .onSnapshot(snap => { //jos tiedot muuttuu collectioniossa tämä ajetaan
        let documents = []; //tehdään tyhjä array
        snap.forEach(doc => { // menee databasen dokumenttejen läpi
          documents.push({ ...doc.data(), id: doc.id }); // työnnetään dokumentit arrayhyn //({...doc.data() on firebasen oikean puoleisin field ja id: doc.id on imagen randomi koodi keskellä
        });
        setDocs(documents);
      });

    return () => unsub(); //tämä metodi tulee silloin kun ei enää haeta hookin kautta.
    // this is a cleanup function that react will run when
    // a component using the hook unmounts
  }, [collection]);

  return { docs }; // palautetaan
}

export default useFirestore;