//import React from 'react';
import React, { useState } from 'react';
import './App.css';
import Card from './Card/Card';
import DrawButton from './DrawButton/DrawButton';
import Modal from './Card/Modal';
import firebase from 'firebase/app';
import 'firebase/database';
import Firebase from './Config/Firebase/db_config';


//import { DB_CONFIG } from './Config/Firebase/db_config';

class App extends React.Component {
  constructor(props){
    super(props);
    this.app = Firebase;
    this.database = this.app.database().ref().child('cards');
    this.updateCard = this.updateCard.bind(this);
    this.state={
      cards: [],
      currentCard: {"id": 0, "eng":"I Ging", "han":"Das Buch der Wandlungen", "pin":"Das I Ching (Buch der Wandlungen), in Deutschland oft auch als I Ging bezeichnet, ist ein rund 5000 Jahre alter chinesischer Text, der sich mit dem Prinzip der Veränderung beschäftigt und alles Existente in 64 komplexen Bildern, sogenannten Hexagrammen, beschreibt.Seit tausenden von Jahren wurde das I Ching als Orakel verwendet, um Situationen und die daraus hervorgehenden Änderungen zu beschreiben."}
    }
  }

 
  componentWillMount(){
    const currentCards = this.state.cards;
    setTimeout(()=>{
    this.database.on('child_added', snap => {
      currentCards.push({
        id:snap.key,
        eng:snap.val().eng,
        han:snap.val().han,
        pin:snap.val().pin,
      })
      this.setState({
        cards: currentCards,
        currentCard: this.getRandomCard(currentCards)
      })
    })
  },2000); 
  }


  getRandomCard(currentCards){
    var card = currentCards[Math.floor(Math.random() * currentCards.length)]
    return(card);
  }

  updateCard(){
    const currentCards = this.state.cards;
    this.setState({
      currentCard: this.getRandomCard(currentCards)
    })
  }


  

  render () { 

  return (
    <div className="App">
      <div className="modal">
      <Modal />
      </div>
      <div className="cardRow">
        <Card eng={this.state.currentCard.eng} 
        han={this.state.currentCard.han} 
        pin={this.state.currentCard.pin} />
      </div>
      <div className="buttonRow">
        <DrawButton drawCard={this.updateCard} />
      </div>
      
    </div>
  );
}
}

export default App;
