import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./SPRE.module.css";
import { useSendPasswordResetEmailMutation } from "../../../redux/userAuthApi";

const SendPasswordResetEmail = () => {
  const [server_error, setServerError] = useState({});
  const [forgotpassword, { data, isLoading, error_success }] =
    useSendPasswordResetEmailMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const actualData = {
      email: data.get("email"),
    };
    const res = await forgotpassword(actualData);
    if (res.error) {
      setServerError(res.error.data.errors);
    }
    if (res.data) {
      setServerError(res.data);
      document.getElementById("forgotpassword").reset();
    }
  };

  return (
    <div className={styles.forgot_password}>
      <h2>Forgot password send reset email</h2>

      <form id="forgotpassword" noValidate onSubmit={handleSubmit}>
        <label>
          Enter your email:
          <input type="email" name="email" placeholder="Enter email:" />
          {server_error.email ? (
            <p className={styles.custom_error}>{server_error.email[0]}</p>
          ) : (
            ""
          )}
        </label>

        <div className={styles.forgot_password_button}>
          <button type="submit" value="Submit">
            <p> Send</p>
          </button>
        </div>
      </form>
      <div className={styles.success_message}>
        {data && data.message && <h4>{data.message}</h4>}
        {error_success && <p>{error_success.message}</p>}
      </div>
    </div>
  );
};

export default SendPasswordResetEmail;
