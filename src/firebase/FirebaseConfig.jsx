// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCX1HR2zMtY9g8Ew1V9Ybl7qe1eRgCEgxI",
  authDomain: "siddhi-project-demo.firebaseapp.com",
  projectId: "siddhi-project-demo",
  storageBucket: "siddhi-project-demo.appspot.com",
  messagingSenderId: "547898447064",
  appId: "1:547898447064:web:f30ae8552ce6165600b3ad",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export { auth, fireDB };
