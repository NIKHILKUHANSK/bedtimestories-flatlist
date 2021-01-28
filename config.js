import firebase from 'firebase'
require("@firebase/firestore")


// Initialize Firebase
var firebaseConfig = {
  apiKey: "AIzaSyC8czaMtTWAgbeP92ge36ZA93i1Cf6q0Tc",
  authDomain: "bed-time-stories-c8c6b.firebaseapp.com",
  projectId: "bed-time-stories-c8c6b",
  storageBucket: "bed-time-stories-c8c6b.appspot.com",
  messagingSenderId: "407440061418",
  appId: "1:407440061418:web:a7f6d3a8b1e306f37db893"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore()      