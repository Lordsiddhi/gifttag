// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAI5weOgDApX8UDBrFZ2IzMnBbXVKKmMbA",
  authDomain: "gift-tag-4411a.firebaseapp.com",
  projectId: "gift-tag-4411a",
  storageBucket: "gift-tag-4411a.appspot.com",
  messagingSenderId: "188913091084",
  appId: "1:188913091084:web:52a3e419f3eef24aec6429",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export { auth, fireDB };
