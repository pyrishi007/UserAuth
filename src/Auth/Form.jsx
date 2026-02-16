import { useState, useRef } from "react";
import validation from "../Utils/validation";
import UserAuthentication from "../services/authService";

const Form = () => {
  const [isSignUPForm, setSignUPForm] = useState(false);
  const [errorMessage, seterrorMessage] = useState("");

  const email = useRef();
  const inputref = useRef();

  const handlrForm = () => {
    setSignUPForm(!isSignUPForm);
  };

  const handleAuthValidation = () => {
    const message = validation(email, inputref);
    seterrorMessage(message);
    //form validation
    if (message) return;

    console.log("ENTERING AUTH");

    //Auth
    UserAuthentication(
      isSignUPForm,
      email.current.value,
      inputref.current.value,
    );
  };

  return (
    <>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="font absolute z-10 w-full h-full flex justify-center items-center"
      >
        <div
          className=" w-[30%] px-5 bg-black/70  
           flex flex-col pt-36 justify-center items-center"
          style={{ position: "relative" }}
        >
          <p
            className="text-white font-bold opacity-95 text-5xl absolute top-18"
            style={{ left: "60px" }}
          >
            {isSignUPForm ? "Sign Up" : "Sign In"}
          </p>

          {isSignUPForm && (
            <input
              className="placeholder:w-sm w-[85%] h-17 mb-8 border border-gray-500 bg-gray-600/60 text-white text-xl px-5 rounded-[5px] focus:outline-none focus:ring-2 focus:border-none focus:ring-blue-600"
              type="Text"
              placeholder="Enter your name"
            />
          )}

          <input
            ref={email}
            className="placeholder:w-sm w-[85%] h-17 mb-8 border border-gray-500 bg-gray-600/60 text-white text-xl px-5 rounded-[5px]  focus:outline-none focus:ring-2 focus:border-none focus:ring-blue-600"
            type="Email"
            placeholder="Email Address"
          />

          {isSignUPForm ? (
            <input
              ref={inputref}
              className="placeholder:w-sm w-[85%] h-17 border mb-8 border-gray-500 bg-gray-600/60 text-white text-xl px-5 rounded-[5px] focus:outline-none focus:ring-2 focus:border-none focus:ring-blue-600"
              type="Password"
              placeholder=" Create  Password"
            />
          ) : (
            <input
              ref={inputref}
              className="placeholder:w-sm w-[85%] h-17 border mb-8 border-gray-500 bg-gray-600/60 text-white text-xl px-5 rounded-[5px] focus:outline-none focus:ring-2 focus:border-none focus:ring-blue-600"
              type="Password"
              placeholder="Password"
            />
          )}

          <button
            className="w-[82%] h-13 bg-red-600 text-white text-xl rounded-[5px] cursor-p"
            onClick={handleAuthValidation}
          >
            {isSignUPForm ? "Sign Up" : "Sign In"}
          </button>
          <p className="w-full text-center mt-4 mb-4 text-red-400 text-lg">
            {errorMessage}
          </p>
          <div className="flex flex-col justify-center items-center gap-4">
            <p className="text-gray-300 text-xl">OR</p>
            <p
              className="text-gray-300 text-xl cursor-pointer pb-23"
              onClick={handlrForm}
            >
              {isSignUPForm
                ? "Already a user? Sign In now"
                : "New to Netflix? Sign up now."}
            </p>
          </div>
        </div>
      </form>
    </>
  );
};

export default Form;
