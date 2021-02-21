import React, { useEffect } from "react";
import "./App.css";
import "./appquery.css";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Feed from "./components/Feed/Feed";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/userSlice";
import Login from "./auth/Login/Login";
import { auth, db } from "./firebase/firebase";
import Sitters from "./components/Sitters/Sitters";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        db.collection("users")
          .doc(userAuth.uid)
          .get()
          .then((doc) => {
            if (doc.exists) {
              console.log("Document data:", doc.data());
              dispatch(
                login({
                  email: userAuth.email,
                  uid: userAuth.uid,
                  displayName: userAuth.displayName,
                  photoURL: doc.data().profileImageUrl,
                  data: doc.data(),
                  token: doc.data().token,
                })
              );
            } else {
              // doc.data() will be undefined in this case
              console.log("No such document!");
            }
          });
        console.log(userAuth);
      } else {
        dispatch(logout());
      }
    });
  }, []);
  return (
    <div className="app">
      <Header />

      {!user ? (
        <Login />
      ) : (
        <div className="app__body">
          <Sidebar />
          <Feed />
          <Sitters />
        </div>
      )}
    </div>
  );
}

export default App;
