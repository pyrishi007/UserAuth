import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./app";
import Auth from "./Auth/Auth";
import Browse from "./Browse/Browse";
import { Provider } from "react-redux";
import store from "./redux/store";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // App is parent
    children: [
      {
        path: "/",
        element: <Auth />,
      },
      {
        path: "/browse",
        element: <Browse />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>,
);
