import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./CP.module.css";

const ChangePassword = () => {
  const [error, setError] = useState({
    status: false,
    msg: "",
    type: "",
  });
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const actualData = {
      password: data.get("password"),
      confirm_password: data.get("confirm_password"),
    };
    if (actualData.password && actualData.confirm_password) {
      if (actualData.password === actualData.confirm_password) {
        console.log(actualData);
        document.getElementById("changepassword").reset();
        setError({
          status: true,
          msg: "Password Changed Successful",
          type: "success",
        });
        // navigate("/user-login/");
        setTimeout(() => {
          navigate("/user-login/");
        }, 1000); // 1 seconds delay
      } else {
        setError({
          status: true,
          msg: "Password and Confirm Password Doesn't Match",
          type: "error",
        });
      }
    } else {
      setError({ status: true, msg: "All Fields are Required", type: "error" });
    }
  };
  return (
    <div className={styles.change_password_wrapper}>
      <h2>Change password</h2>
      <form id="changepassword" noValidate onSubmit={handleSubmit}>
        <label>
          Enter New password:
          <input
            type="password"
            name="password"
            placeholder="Enter password:"
          />
        </label>
        <label>
          Confirm New password:
          <input
            type="password"
            name="confirm_password"
            placeholder="Confirm password:"
          />
        </label>
        <div className={styles.change_password_button}>
          <button type="submit" value="Submit">
            <p>Update</p>
          </button>
        </div>
      </form>
      {/* <div className={styles.already_registered}>
        <Link to="/user-login/">
          <p>Logout</p>
        </Link>
      </div> */}

      <div className={styles.change_password_alert}>
        {error.status ? <p>{error.msg}</p> : ""}
      </div>
    </div>
  );
};

export default ChangePassword;
