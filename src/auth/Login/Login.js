import * as React from "react";
import "./Login.css";
import LoginImage from "../../assets/cards/trustandfairness.png";
import LoginLogo from "../../assets/logo-dark-on-light.png";
import { auth, db } from "../../firebase/firebase";
import { useState } from "react";
import axiosFunctions from "../../functions/axiosFunctions";
import { useDispatch } from "react-redux";
import { login } from "../../features/userSlice";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const register = (e) => {
    axiosFunctions.loginUser(email, password).then((user) => {
      let harderPassword = "bubble" + password;
      axiosFunctions.getUserDetails(user.data.token).then((userObject) => {
        console.log(userObject.data);
        auth
          .createUserWithEmailAndPassword(email, harderPassword)
          .then((userAuth) => {
            console.log("sds");
            userAuth.user
              .updateProfile({
                displayName: userObject.data.fullName,
                photoUrl: userObject.data.profileImageUrl,
              })
              .then(() => {
                dispatch(
                  login({
                    email: userAuth.user.email,
                    uid: userAuth.user.uid,
                    displayName: userObject.data.fullName,
                    photoURL: userObject.data.profileImageUrl,
                    data: userObject.data,
                  })
                );
              });
          })
          .catch((error) => {
            console.log(error);
          });
      });
    });
  };
  const loginToApp = (e) => {
    e.preventDefault();
    // janet.stevans@siliconrhino.io
    /*
    axiosFunctions.loginUser(email, password).then((user) => {
*/
    let harderPassword = "bubble" + password;
    auth
      .signInWithEmailAndPassword(email, harderPassword)
      .then((userAuth) => {
        db.collection("users")
          .doc(userAuth.user.uid)
          .get()
          .then((user) => {
            console.log(user);
            console.log(userAuth);
            /*                      dispatch(
                        login({
                          email: userAuth.user.email,
                          uid: userAuth.user.uid,
                          displayName: userAuth.user.displayName,
                          photoURL: userObject.profileImageUrl,
                          data: userObject.data,
                          token: user.data.token,
                        })
                      );*/
          });
      })
      .catch((error) => alert(error));
  };

  return (
    <div className="login">
      <div className="login__imageContainer">
        <img className="login__svgClip" src={LoginImage} alt="" />
        <svg height="0" width="0">
          <defs>
            <clipPath id="svgPath">
              <circle
                stroke="#000000"
                strokeMiterlimit="10"
                cx="80"
                cy="50"
                r="60"
              />
              <circle
                stroke="#000000"
                strokeMiterlimit="10"
                cx="140"
                cy="185"
                r="134.576"
              />
              <circle
                stroke="#000000"
                strokeMiterlimit="10"
                cx="420"
                cy="170"
                r="78"
              />
              <circle
                stroke="#000000"
                strokeMiterlimit="10"
                cx="250.915"
                cy="215.763"
                r="133.644"
              />
              <circle
                stroke="#000000"
                strokeMiterlimit="10"
                cx="345.39"
                cy="5.882"
                r="85.17"
              />
            </clipPath>
          </defs>
        </svg>
      </div>
      <img src={LoginLogo} alt="" />
      <form>
        <input
          value={email}
          placeholder="Email"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          value={password}
          placeholder="Password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={loginToApp}>Sign In</button>
      </form>
      <p>
        Not a member?
        <span className="login__register" onClick={register}>
          Register Now
        </span>
      </p>
    </div>
  );
};

export default Login;
