import React from "react";
import { Link } from "react-router-dom";
import styles from "./Login.module.css";

const Login = () => {
  return (
    <div className={styles.login_wrapper}>
      <h2>Login</h2>
      <form>
        <label>
          Enter your email:
          <input type="email" name="email" placeholder="Enter email:" />
        </label>
        <label>
          Enter your password:
          <input
            type="password"
            name="password"
            placeholder="Enter password:"
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
            <p>Forgot password</p>
          </Link>
        </div>
        <div className={styles.new_user}>
          <Link to="/user/register/">
            <p>New user - Register here</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
