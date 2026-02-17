import { useState, useRef } from "react";
import validation from "../Utils/validation";
import UserAuthentication from "../services/authService";
import { useDispatch, useSelector } from "react-redux";


const Form = () => {
  const [isSignUPForm, setSignUPForm] = useState(false);
  const [errorMessage, seterrorMessage] = useState("");
  const userinfo = useSelector((store) => store.user.userinfo);
  const dispatch = useDispatch()

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
      dispatch
    );
  };

  return (
    <>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute z-10 w-full h-full flex justify-center items-center px-4"
      >
        <div
          className="
      w-full max-w-md
      bg-black/80 backdrop-blur-xl
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
              ref={inputref}
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
              ref={inputref}
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
