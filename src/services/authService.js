import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import auth from "../fireBase/authSdk";
import { toast } from "react-toastify";
import { NEW_USER_CONFIG, ALREADY_USER_CONFIG } from "../Utils/toastConfigs";

import { userProfile } from "../redux/features/userSlice";

// const dispatch = useDispatch();

const UserAuthentication = (isSignUPForm, email, password) => {
  if (!isSignUPForm) {
    //Sign-In Logic
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode + errorMessage);
      });
  } else {
    //Sign-UP Logic
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        toast.success("Account created successfully", NEW_USER_CONFIG);
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode + errorMessage);
        toast.info(
          "Account already exists. Please sign in.",
          ALREADY_USER_CONFIG,
        );
      });
  }
};

export default UserAuthentication;
