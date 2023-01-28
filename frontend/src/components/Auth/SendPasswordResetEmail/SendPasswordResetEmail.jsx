import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./SPRE.module.css";

const SendPasswordResetEmail = () => {
  const [error, setError] = useState({ status: false, msg: "", type: "" });
  const handleSubmit = (e) => {
    e.preventDefault();

    const data = new FormData(e.currentTarget);
    const actualData = {
      email: data.get("email"),
    };
    if (actualData.email) {
      document.getElementById("forgotpassword").reset();
      setError({
        status: true,
        msg: "Password reset link sent to your email address.",
        type: "success",
      });
    } else {
      setError({
        status: true,
        msg: "Please provide a valid email address.",
        type: "error",
      });
    }
  };

  return (
    <div className={styles.forgot_password}>
      <h2>Forgot password send reset email</h2>

      <form id="forgotpassword" noValidate onSubmit={handleSubmit}>
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
        <Link to="/user-login/">
          <p>Login</p>
        </Link>
      </div>
      <div className={styles.password_reset_alert}>
        {error.status ? <p>{error.msg}</p> : ""}
      </div>
    </div>
  );
};

export default SendPasswordResetEmail;
