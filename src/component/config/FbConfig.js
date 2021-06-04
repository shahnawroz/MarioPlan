import firebase from 'firebase'
import 'firebase/firestore'
import 'firebase/auth'

var firebaseConfig = {
    apiKey: "AIzaSyCvD5io9zzQdP_BslW5Jq_AqcegwbpDV5A",
    authDomain: "sh-marioplan.firebaseapp.com",
    projectId: "sh-marioplan",
    storageBucket: "sh-marioplan.appspot.com",
    messagingSenderId: "395253986904",
    appId: "1:395253986904:web:06a359f1c83cea647f7c2d",
    measurementId: "G-QM0L5V4Y14"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({timestampsInSnapshots:true});

export default firebase;