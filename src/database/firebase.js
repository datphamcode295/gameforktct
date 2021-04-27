import firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyDnj9H7RzP3YqiloVb5OTLQNwM_pc9WYMw",
    authDomain: "gameforktct.firebaseapp.com",
    databaseURL: "https://gameforktct-default-rtdb.firebaseio.com",
    projectId: "gameforktct",
    storageBucket: "gameforktct.appspot.com",
    messagingSenderId: "711008755600",
    appId: "1:711008755600:web:694f0ea53ab68281ef1d15"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export default firebase;