import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBIrnn_gKXmZ-51QxjGur-DwpQ_RoApJ7Q",
  authDomain: "all4all-b8e8d.firebaseapp.com",
  projectId: "all4all-b8e8d",
  storageBucket: "all4all-b8e8d.appspot.com",
  messagingSenderId: "896206779747",
  appId: "1:896206779747:web:2b664e8db4376e95628f56",
  measurementId: "G-GPYYQ5PD6V",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
