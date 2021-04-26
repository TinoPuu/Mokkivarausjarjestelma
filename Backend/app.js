//npm install cors
//npm install express
//npm install firebase
//npm install supertest
//npm install mocha

var firebase = require("firebase")
const cors = require('cors')

const express = require("express");
var request = require("request");
path = require( 'path' );
const app = express();
const port = 5000;

app.use(cors());
app.use(express.static(__dirname + '/public'));

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

app.get("/Varaukset", (req, res) => {
  const ref = projectFirestore.collection("Varaukset");
    ref.onSnapshot((querySnapshot) => {
        const items = [];
        querySnapshot.forEach((doc) =>{
            items.push(doc.data());
          })
        console.log(items);
        res.status(200).send(items);
    })
  } );
  

  
  app.get("/Arvostelut", (req, res) => {
    const ref = projectFirestore.collection("Arvostelut");
      ref.onSnapshot((querySnapshot) => {
          const items = [];
          querySnapshot.forEach((doc) =>{
              items.push(doc.data());
            })
          console.log(items);
          res.status(200).send(items);
      })
    } );

app.get('/', function (req, res) {
  res.render('index');
});

//app.listen(port, () => console.log(`Example app listening on port ${port}!`))

var server = app.listen(5000, function () {
  var port = server.address().port;
  console.log('Example app listening at port %s', port);
});
module.exports = server;