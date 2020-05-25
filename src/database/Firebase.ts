import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/storage';

const Firebase = {
  config: {
    apiKey: "AIzaSyCAEtCrQ9hp8XLzj5CzlkAZdEg9LwSp2b4",
    authDomain: "meeting-room-a94e4.firebaseapp.com",
    databaseURL: "https://meeting-room-a94e4.firebaseio.com",
    projectId: "meeting-room-a94e4",
    storageBucket: "meeting-room-a94e4.appspot.com",
    messagingSenderId: "742326480565",
    appId: "1:742326480565:web:fff6f64e8ae32c4c0558fc"
  },
  init() {
    firebase.initializeApp(this.config);
  },
};

export default Firebase;