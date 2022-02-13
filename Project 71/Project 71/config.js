import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
    apiKey: "AIzaSyAZsVUZSR-9jom6ZB-MCAOsazub5foOxS8",
    authDomain: "project-71-d847e.firebaseapp.com",
    projectId: "project-71-d847e",
    storageBucket: "project-71-d847e.appspot.com",
    messagingSenderId: "84571423438",
    appId: "1:84571423438:web:4dd54bdf341de3fd70869f"
  };

  
  const app = initializeApp(firebaseConfig);
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
