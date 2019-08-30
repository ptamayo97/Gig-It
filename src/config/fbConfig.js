import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Replace this with your own config details
var config = {
  apiKey: "AIzaSyA5acI7HtRSJyoYt1tNK7aSoHQOJFGaK4M",
  authDomain: "gig-it-fafd1.firebaseapp.com",
  databaseURL: "https://gig-it-fafd1.firebaseio.com",
  projectId: "gig-it-fafd1",
  storageBucket: "gig-it-fafd1.appspot.com",
  messagingSenderId: "660146414559",
  appId: "1:660146414559:web:cfbfa21ea7520426"
};
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
