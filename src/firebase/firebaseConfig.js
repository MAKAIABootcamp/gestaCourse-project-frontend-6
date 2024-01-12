// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDw9dndb7Y1T8C4h-TmXGZr2H-il8nEucw",
  authDomain: "gestacourse.firebaseapp.com",
  projectId: "gestacourse",
  storageBucket: "gestacourse.appspot.com",
  messagingSenderId: "720106414055",
  appId: "1:720106414055:web:654fac3b04d65845c3a742",
  measurementId: "G-PEMKL7P0G6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const firestore = getFirestore(app);
