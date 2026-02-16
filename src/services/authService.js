import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../fireBase/authSdk";

const UserAuthentication = (isSignUPForm, email, password) => {
  if (!isSignUPForm) {
  } else {
    console.log(email);
    console.log(password);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode + errorMessage);
      });
  }
};

export default UserAuthentication;
