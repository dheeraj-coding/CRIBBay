import firebase from 'firebase';
const config = {
    apiKey: "AIzaSyBw0sjgahg2TOnLsnKwVplktXTlc4PPYLw",
    authDomain: "cribbay.firebaseapp.com",
    databaseURL: "https://cribbay.firebaseio.com",
    projectId: "cribbay",
    storageBucket: "cribbay.appspot.com",
    messagingSenderId: "837872881114"
};
var fire = firebase.initializeApp(config);
export default fire;