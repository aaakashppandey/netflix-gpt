// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCeEWf4E-4e7soIU4X1SvA6DUFIJ7hIg3U",
  authDomain: "netflix-gpt-feb28.firebaseapp.com",
  projectId: "netflix-gpt-feb28",
  storageBucket: "netflix-gpt-feb28.appspot.com",
  messagingSenderId: "440831984434",
  appId: "1:440831984434:web:0fd5f80624f92c0b0e0d2b",
  measurementId: "G-T0NZ0JG0TR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
