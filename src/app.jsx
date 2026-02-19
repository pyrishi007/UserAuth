import { ToastContainer } from "react-toastify";

import { Outlet } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import auth from "./fireBase/authSdk";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { addUser } from "./redux/features/userSlice";
addUser



const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(
          addUser({
            userId: uid,
            userEmail: email,
            userName: displayName,
          }),
        );
      } else {
      }
    });
  }, []);

  return (
    <div>
      <Outlet />
      <ToastContainer />
    </div>
  );
};

export default App;
