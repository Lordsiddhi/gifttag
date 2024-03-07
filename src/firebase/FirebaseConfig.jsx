// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA_l6UiBXwQrDmqY0dsYcR89HHWEBZekUk",
  authDomain: "gift-1-df713.firebaseapp.com",
  projectId: "gift-1-df713",
  storageBucket: "gift-1-df713.appspot.com",
  messagingSenderId: "1077201852488",
  appId: "1:1077201852488:web:d4adceaf9f7fa76fea207d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export { auth, fireDB };
