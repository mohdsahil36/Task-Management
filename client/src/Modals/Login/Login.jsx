import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import classes from './Login.module.css';

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://task-management-backend-wytj.onrender.com/login", { email, password })
      .then((result) => {
        if (result.data === "Success") {
          navigate("/home");
        } else {
          alert("You are not registered to this service");
          navigate("/register");
        }
      })
      .catch((err) => {
        console.error("Login error:", err);
        alert("An error occurred. Please try again.");
      });
  };

  return (
    <>
    <div className={classes.Outer}>
      <div className={classes['login-modal']}>
        <p className={classes['login-title']}>Welcome to <span className={classes.workflow}>Workflow</span>!</p>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <input
              type="email"
              placeholder="Your email"
              autoComplete="off"
              name="email"
              className={classes['email-input']}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              placeholder="Password"
              name="password"
              className={classes['password-input']}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className={classes['login-button']}>
            Login
          </button>
        </form>
        <p className={classes['new-acc']}>Don't have an account? Create a <Link to='/register' className={classes.register}>new account</Link></p>
      </div>
    </div>
    </>
  );
}

export default Login;
