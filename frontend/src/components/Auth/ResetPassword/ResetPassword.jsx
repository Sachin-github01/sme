import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./RPW.module.css";

const ResetPassword = () => {
  const [error, setError] = useState({ status: false, msg: "", type: "" });
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

    const data = new FormData(e.currentTarget);
    const actualData = {
      password: data.get("password"),
      confirm_password: data.get("confirm_password"),
    };
    if (actualData.password && actualData.confirm_password) {
      if (actualData.password === actualData.confirm_password) {
        document.getElementById("resetpassword").reset();
        setError({
          status: true,
          msg: "Password reset successfull",
          type: "success",
        });
        // navigate("/user/profile");
        setTimeout(() => {
          navigate("/user-login/");
        }, 1000); // 1 seconds delay
      } else {
        setError({
          status: true,
          msg: "Password and confirm password doesn't match.",
          type: "error",
        });
      }
    } else {
      setError({ status: true, msg: "All fields are required", type: "error" });
    }
  };
  return (
    <div className={styles.reset_password}>
      <h2>Reset your password</h2>
      <form id="resetpassword" noValidate onSubmit={handleSubmit}>
        <label>
          Enter New password:
          <input type="password" name="password" placeholder="Enter password" />
        </label>
        <label>
          Confirm New password:
          <input
            type="password"
            name="confirm_password"
            placeholder="Enter confirm password"
          />
        </label>
        <div className={styles.rese_password_button}>
          <button type="submit" value="Submit">
            <p> Reset</p>
          </button>
        </div>
      </form>
      <div className={styles.reset_password_alert}>
        {error.status ? <p>{error.msg}</p> : ""}
      </div>
    </div>
  );
};

export default ResetPassword;
