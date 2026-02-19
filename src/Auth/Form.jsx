import { useState, useRef } from "react";
import validation from "../Utils/validation";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import auth from "../fireBase/authSdk";
import { toast } from "react-toastify";

import {NEW_USER_CONFIG, ALREADY_USER_CONFIG, SIGN_IN_USER} from "../Utils/toastConfigs"



const Form = () => {
  const navigate = useNavigate();
  const [isSignUPForm, setSignUPForm] = useState(false);
  const [errorMessage, seterrorMessage] = useState("");


  const email = useRef();
  const password = useRef();

  const handlrForm = () => {
    setSignUPForm(!isSignUPForm);
  };

  const handleAuthValidation = () => {
    const message = validation(email, password);
    seterrorMessage(message);
    //form validation
    if (message) return;

    console.log("ENTERING AUTH");

   if (!isSignUPForm) {
    //Sign-In Logic
    signInWithEmailAndPassword(auth, email.current.value, password.current.value)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        toast.success("Welcome back 👋",SIGN_IN_USER);
        navigate("/browse");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode + errorMessage);
      });
  } else {
    //Sign-UP Logic
    createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
      .then((userCredential) => {
        const user = userCredential.user;
        toast.success("Account created successfully", NEW_USER_CONFIG);
        console.log(user);
        navigate("/browse");
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

  return (
    <>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute z-10 w-full h-full flex justify-center items-center px-4"
      >
        <div
          className="w-full max-w-md bg-black/80 backdrop-blur-xl
      border border-white/10
      shadow-[0_40px_120px_rgba(0,0,0,0.9)]
      rounded-2xl
      px-10 py-12
      flex flex-col gap-6
      "
          style={{ position: "relative" }}
        >
          {/* TITLE */}
          <p className="text-white text-4xl md:text-5xl font-semibold tracking-tight">
            {isSignUPForm ? "Sign Up" : "Sign In"}
          </p>

          {/* NAME */}
          {isSignUPForm && (
            <input
              className="
          w-full h-14
          bg-white/5
          border border-white/10
          rounded-lg
          px-4
          text-white text-lg
          placeholder:text-gray-400
          focus:outline-none
          focus:ring-2 focus:ring-red-600
          focus:bg-white/10
          transition
          "
              type="text"
              placeholder="Enter your name"
            />
          )}

          {/* EMAIL */}
          <input
            ref={email}
            className="
        w-full h-14
        bg-white/5
        border border-white/10
        rounded-lg
        px-4
        text-white text-lg
        placeholder:text-gray-400
        focus:outline-none
        focus:ring-2 focus:ring-red-600
        focus:bg-white/10
        transition
        "
            type="email"
            placeholder="Email Address"
          />

          {/* PASSWORD */}
          {isSignUPForm ? (
            <input
              ref={password}
              className="
          w-full h-14
          bg-white/5
          border border-white/10
          rounded-lg
          px-4
          text-white text-lg
          placeholder:text-gray-400
          focus:outline-none
          focus:ring-2 focus:ring-red-600
          focus:bg-white/10
          transition
          "
              type="password"
              placeholder="Create Password"
            />
          ) : (
            <input
              ref={password}
              className="
          w-full h-14
          bg-white/5
          border border-white/10
          rounded-lg
          px-4
          text-white text-lg
          placeholder:text-gray-400
          focus:outline-none
          focus:ring-2 focus:ring-red-600
          focus:bg-white/10
          transition
          "
              type="password"
              placeholder="Password"
            />
          )}

          {/* BUTTON */}
          <button
            className="
        w-full h-14
        bg-gradient-to-r from-red-600 to-red-700
        hover:from-red-700 hover:to-red-800
        text-white text-lg font-semibold
        rounded-lg
        shadow-lg shadow-red-900/40
        transition
        active:scale-[0.98]
        "
            onClick={handleAuthValidation}
          >
            {isSignUPForm ? "Sign Up" : "Sign In"}
          </button>

          {/* ERROR */}
          <p className="text-red-400 text-center text-sm">{errorMessage}</p>

          {/* DIVIDER */}
          <div className="flex items-center gap-3 text-gray-400 text-sm">
            <div className="flex-1 h-[1px] bg-white/10"></div>
            OR
            <div className="flex-1 h-[1px] bg-white/10"></div>
          </div>

          {/* TOGGLE */}
          <p
            className="text-gray-300 text-sm text-center hover:text-white cursor-pointer transition"
            onClick={handlrForm}
          >
            {isSignUPForm
              ? "Already a user? Sign In now"
              : "New to Netflix? Sign up now."}
          </p>
        </div>
      </form>
    </>
  );
};

export default Form;
