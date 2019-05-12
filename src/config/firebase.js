import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyAMxW3ReKNZ6x0DQBgUV8rykJFKZ9UwLCY",
    authDomain: "productionready-8e602.firebaseapp.com",
    databaseURL: "https://productionready-8e602.firebaseio.com",
    projectId: "productionready-8e602",
    storageBucket: "productionready-8e602.appspot.com",
    messagingSenderId: "610059157853",
    appId: "1:610059157853:web:275d19747b08b903"
};

const fire = firebase.initializeApp(config);
export default fire;