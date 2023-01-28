import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Login.module.css";

const Login = () => {
  const [error, setError] = useState({ status: false, msg: "", type: "" });
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

    const data = new FormData(e.currentTarget);
    const actualData = {
      email: data.get("email"),
      password: data.get("password"),
    };
    if (actualData.email && actualData.password) {
      document.getElementById("login").reset();
      setError({ status: true, msg: "Login Success", type: "success" });
      // navigate("/user/profile");
      setTimeout(() => {
        navigate("/user/profile");
      }, 1000); // 1 seconds delay
    } else {
      setError({ status: true, msg: "All fields are required", type: "error" });
    }
  };

  return (
    <div className={styles.login_wrapper}>
      <h2>Login</h2>
      <form id="login" noValidate onSubmit={handleSubmit}>
        <label>
          Enter your email:
          <input
            type="email"
            name="email"
            placeholder="Enter email:"
            required
          />
        </label>
        <label>
          Enter your password:
          <input
            type="password"
            name="password"
            placeholder="Enter password:"
            required
          />
        </label>
        <div className={styles.login_button}>
          <button type="submit" value="Submit">
            <p> Login</p>
          </button>
        </div>
      </form>
      <div className={styles.user2}>
        <div className={styles.forgot_password}>
          <Link to="/user/forgot-password/">
            <p>Forgot password ?</p>
          </Link>
        </div>
        <div className={styles.new_user}>
          <Link to="/user/register/">
            <p>New user - Register here</p>
          </Link>
        </div>
      </div>
      <div className={styles.login_alert}>
        {error.status ? <p>{error.msg}</p> : ""}
      </div>
    </div>
  );
};

export default Login;
