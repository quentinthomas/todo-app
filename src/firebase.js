

import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAPmJEZVP45v7emEOdjjHY7gwsAehltr-8",
    authDomain: "todo-app-20deb.firebaseapp.com",
    projectId: "todo-app-20deb",
    storageBucket: "todo-app-20deb.appspot.com",
    messagingSenderId: "969082781219",
    appId: "1:969082781219:web:7d17ed0b2bec20dd4b3b96",
    measurementId: "G-J9CH6MZL20"
});

const db = firebaseApp.firestore();

export default db;