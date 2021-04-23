import firebase from 'firebase/app';
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyCJJa_gwZ5R1btikLTZ0jXrAgb32we8e64",
  authDomain: "mokkivaraustahko-2ac55.firebaseapp.com",
  projectId: "mokkivaraustahko-2ac55",
  storageBucket: "mokkivaraustahko-2ac55.appspot.com",
  messagingSenderId: "55459221413",
  appId: "1:55459221413:web:868bf8bb551b181c13224c",
  measurementId: "G-60G9GD226P"
};
// Initialize Firebase

const fire = firebase.initializeApp(firebaseConfig);
const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp; // timestampdata jolla nähdään teko aika

export { fire, projectStorage, projectFirestore, timestamp };