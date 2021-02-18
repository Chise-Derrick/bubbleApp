import * as React from "react";
import "./Login.css";
import LoginImage from "../../assets/logo-dark-on-light.png";
import { auth } from "../../firebase/firebase";
import { useState } from "react";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const register = (e) => {
    auth.createUserWithEmailAndPassword(email, password).then((userAuth) => {});
  };
  const loginToApp = (e) => {
    e.preventDefault();
  };

  return (
    <div className="login">
      <img src={LoginImage} alt="" />
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
