// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAbgIT3T5I6RLG9ynvPJ6B5UOWIWopJbx4",
  authDomain: "netflix-gpt-e60af.firebaseapp.com",
  projectId: "netflix-gpt-e60af",
  storageBucket: "netflix-gpt-e60af.firebasestorage.app",
  messagingSenderId: "801620453614",
  appId: "1:801620453614:web:b5bc2093f3832d82c8abff",
  measurementId: "G-V80F353J2Q",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
