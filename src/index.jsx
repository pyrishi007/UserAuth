import react from "react";
import ReactDOM from "react-dom/client";
import Auth from "./Auth/Auth";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <div>
      <Auth />
      <ToastContainer />
    </div>
  );
};

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<App />);
