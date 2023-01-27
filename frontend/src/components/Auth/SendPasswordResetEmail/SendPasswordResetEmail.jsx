import React from "react";
import { Link } from "react-router-dom";
import styles from "./SPRE.module.css";

const SendPasswordResetEmail = () => {
  return (
    <div className={styles.forgot_password}>
      <h2>Forgot password send reset email</h2>

      <form>
        <label>
          Enter your email:
          <input type="email" name="email" placeholder="Enter email:" />
        </label>

        <div className={styles.forgot_password_button}>
          <button type="submit" value="Submit">
            <p> Send</p>
          </button>
        </div>
      </form>
      <div className={styles.user_login}>
        <Link to="/user/">
          <p>Login</p>
        </Link>
      </div>
    </div>
  );
};

export default SendPasswordResetEmail;
