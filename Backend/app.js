var firebase = require("firebase")
const cors = require('cors')
const express = require("express");
var request = require("request");
const app = express();
const port = 5000;
var numero = 6;

app.use(cors());

firebase.initializeApp({
    apiKey: "AIzaSyCJJa_gwZ5R1btikLTZ0jXrAgb32we8e64",
    authDomain: "mokkivaraustahko-2ac55.firebaseapp.com",
    projectId: "mokkivaraustahko-2ac55",
    storageBucket: "mokkivaraustahko-2ac55.appspot.com",
    messagingSenderId: "55459221413",
    appId: "1:55459221413:web:868bf8bb551b181c13224c",
    measurementId: "G-60G9GD226P"
}) 

const projectFirestore = firebase.firestore();
const ref = projectFirestore.collection("Varaukset");
app.get("/Varaukset", (req, res) => {
    ref.onSnapshot((querySnapshot) => {
        const items = [];
        querySnapshot.forEach((doc) =>{
            items.push(doc.data());


        })
        console.log(items);
        res.send(200,items);
    })


} );
app.listen(port, () => console.log(`Example app listening on port ${port}!`))