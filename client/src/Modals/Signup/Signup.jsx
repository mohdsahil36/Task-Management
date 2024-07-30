import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import classes from './Signup.module.css';

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://task-management-backend-wytj.onrender.com/register", { name, email, password })
      .then((result) => {
        console.log(result);
        alert("Registration successful! Redirecting to login page.");
        navigate("/");
      })
      .catch((err) => {
        console.error("Signup error:", err);
        alert("An error occurred. Please try again.");
      });
  };

  return (
    <div className={classes['outer-register']}>
      <div className={classes['register-modal']}>
      <p className={classes['register-title']}>Welcome to <span className={classes.workflow}>Workflow</span>!</p>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <input
              type="text"
              placeholder="Full Name"
              autoComplete="off"
              name="name"
              className={classes['fullname-input']}
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
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
          <div className="mb-3">
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
          <button type="submit" className={classes['signup-button']}>
            Sign Up
          </button>
        </form>
        <p className={classes['new-acc']}>Already have an account ? <Link to='/' className={classes.login}>Login</Link></p>
      </div>
    </div>
  );
}

export default Signup;
