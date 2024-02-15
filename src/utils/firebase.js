// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAQ8K9U7UIQDohnhHVgx4VuRoTBusD20ss",
  authDomain: "netflix-gpt-v1-f18da.firebaseapp.com",
  projectId: "netflix-gpt-v1-f18da",
  storageBucket: "netflix-gpt-v1-f18da.appspot.com",
  messagingSenderId: "279268645982",
  appId: "1:279268645982:web:91516a87f16e7d0f4d68cf",
  measurementId: "G-MBVXJDGKLL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
