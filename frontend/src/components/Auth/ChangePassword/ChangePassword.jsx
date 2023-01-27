import React from "react";
import { Link } from "react-router-dom";
import styles from "./CP.module.css";

const ChangePassword = () => {
  return (
    <div className={styles.change_password_wrapper}>
      <h2>Change password</h2>
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
        <div className={styles.change_password_button}>
          <button type="submit" value="Submit">
            <p>Update</p>
          </button>
        </div>
      </form>
      <div className={styles.already_registered}>
        <Link to="/user/">
          <p>Login here</p>
        </Link>
      </div>
    </div>
  );
};

export default ChangePassword;
