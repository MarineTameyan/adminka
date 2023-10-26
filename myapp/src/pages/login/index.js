import React, { useState } from "react";
import "./style.css"

export const Login = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const handleLoginChange = (e) => {
    setLogin(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleClick = () => {
    localStorage.setItem("login", login);
    localStorage.setItem("password", password);
    window.location.reload()
  };

  return (
    <div className="login-form">
      <div className="forms">
      <label>
        <input type="text" placeholder="Login" name={login} onChange={handleLoginChange} />
      </label>
      <label>
        <input type="password" placeholder="Password" name={password} onChange={handlePasswordChange} />
      </label>
      </div>
      <div className="sign-in">
        <button onClick={handleClick}>Sign in</button>
      </div>
    </div>
  );
};
