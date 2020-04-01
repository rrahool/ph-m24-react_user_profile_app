import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import List from './components/List/List';
import * as firebase from "firebase/app";
import firebaseConfig from './firebase.config';

firebase.initializeApp(firebaseConfig);

function App() {

  return (
    <div>
      <Header></Header>
      <List></List>
    </div>
  );
}

export default App;
