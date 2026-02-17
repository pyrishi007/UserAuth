import react from "react";
import ReactDOM from "react-dom/client";
import Auth from "./Auth/Auth";
import { ToastContainer } from "react-toastify";
import { Provider } from "react-redux";
import store from "./redux/store";

const App = () => {
  return (
    <div>
      <Provider store={store}>
        <Auth />
        <ToastContainer />
      </Provider>
    </div>
  );
};

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<App />);
