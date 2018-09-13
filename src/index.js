import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as firebase from 'firebase';
firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        alert("Logged in");
        console.log("Logged In");
    } else {
        alert("Not logged in");
        console.log("Not logged in");
    }
});
ReactDOM.render(<App />, document.getElementById('root'));
