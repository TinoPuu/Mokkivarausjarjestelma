import React, { Component, useState, useEffect } from 'react';
import { fire, projectStorage, projectFirestore, timestamp } from "../Firebase/config";
import varaus from '../Navisivut/varaus.css';
import '../App.css';
import EventCalendar from './EventCalendar';


/*class Varaus extends Component{

    state={
      text : ""
    }
  
    handleText1=e=>{
      this.setState({
         text1 : e.target.value
      })
      this.handleTextCompleteEdition();
    }
    handleText2=e=>{
      this.setState({
         text2 : e.target.value
      })
      this.handleTextCompleteEdition();
    }
    handleText3=e=>{
      this.setState({
         text3 : e.target.value
      })
      this.handleTextCompleteEdition();
    }
    handleTextCompleteEdition=e=>{
      this.setState({
         textComplete : (this.state.text1 + "," + this.state.text2 + "," + this.state.text3)
      })
    }
    
  
    handleSubmit=e=>{
      //this.handleTextCompleteEdition();
      let messageRef = fire.database().ref('messages').orderByKey().limitToLast(100);
      fire.database().ref('messages').push(this.state.textComplete);
      this.setState({
        text : ""
      })
    }
    
  
  
  
    render(){
      return (
        <div className="App-header">
          <label>Tee varaus:</label>
          <br/>
          <label>Ajanjakso</label>
          <br/>
          <input type="text" onChange={this.handleText1} id="inputText"/>
          <br/>
          <label>Nimi</label>
          <br/>
          <input type="text" onChange={this.handleText2} id="Nimi"/>
          <br/>
          <label>Puhelinnumero</label>
          <br/>
          <input type="text" onChange={this.handleText3} id="Puhelin"/>
          <br/>
          <button onClick={this.handleSubmit}>Tee varaus</button>      
        </div>
      );
    }
  }*/
function Varaus() {

  const [name, setName] = useState(null)
  const [puh, setPuh] = useState(null)
  const [addrs, setAddrs] = useState(null)
  const [addrs2, setAddrs2] = useState(null)

  const [varaukset, setVaraukset] = useState([])
  const fetchVaraukset = async () => {
    const response = projectFirestore.collection('Varaukset');
    const data = await response.get();
    data.docs.forEach(item => {
      setVaraukset([...varaukset, item.data()])
    })
  }
  useEffect(() => {
    fetchVaraukset();
  }, [])

  function getName(val) {
    setName(val.target.value)
    console.warn(val.target.value)
  }
  function getPuh(val) {
    setPuh(val.target.value)
    console.warn(val.target.value)
  }
  function getAddrs(val) {
    setAddrs(val.target.value)
    console.warn(val.target.value)
  }
  function getAddrs2(val) {
    setAddrs2(val.target.value)
    console.warn(val.target.value)
  }


  function Lisays() {
    //String id = projectFirestore.collection("collection_name").document().getId();
    projectFirestore.collection("Varaukset").doc().set({
      nimi: name,
      puhelin: puh,
      alkm: addrs,
      loppu: addrs2
    })
      .then(() => {
        console.log("Document successfully written!");
      })
      .catch((error) => {
        console.error("Error writing document: ", error);
      });

      projectFirestore.collection("Varaustiedot").doc().set({
        nimi: name,
        start: addrs,
        end: addrs2
      })
        .then(() => {
          console.log("Document successfully written!");
        })
        .catch((error) => {
          console.error("Error writing document: ", error);
        });

  }


  return (
    <div className="App">
      {
        varaukset && varaukset.map(varaus => {
          return (
            <div className="varaus-container">
              <EventCalendar/>
              <div class="grid-item">
              <h5>Tee varaus:</h5> 
                  <label>Nimi</label>
                <div class = "grid-item.nimi">  
                <input type="text" id="Nimi" onChange={getName} />
                </div>
                  <label>Puhelinnumero</label>
                  <div class = "grid-item.Puh">  
                <input type="text" id="Puh" onChange={getPuh} />
                  </div>
                  <label>Alkupäivämäärä</label>
                  <div class = "grid-item.Osoite">  
                <input type="text" id="Aika" onChange={getAddrs} />
                  </div>
                  <label>Loppupäivämäärä</label>
                  <div class = "grid-item.Osoite">  
                <input type="text" id="Aika2" onChange={getAddrs2} />
                  </div>
                <button onClick={Lisays}>Tee uusi varaus</button>
              </div>
            </div>
          )
        })
      }
    </div>
  );
}

export default Varaus;