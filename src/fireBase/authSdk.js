import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAbgIT3T5I6RLG9ynvPJ6B5UOWIWopJbx4",
  authDomain: "netflix-gpt-e60af.firebaseapp.com",
  projectId: "netflix-gpt-e60af",
  storageBucket: "netflix-gpt-e60af.firebasestorage.app",
  messagingSenderId: "801620453614",
  appId: "1:801620453614:web:b5bc2093f3832d82c8abff",
  measurementId: "G-V80F353J2Q",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
