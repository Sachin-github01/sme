import React from "react";
import { Link } from "react-router-dom";
import styles from "./Register.module.css";

const Register = () => {
  return (
    <div className={styles.register_wrapper}>
      <h2>Register</h2>
      <form>
        <label>
          Enter your name:
          <input type="text" name="name" placeholder="Enter your full name" />
        </label>
        <label>
          Enter your email:
          <input type="email" name="email" placeholder="Enter your email" />
        </label>
        <label>
          Enter your password:
          <input type="password" name="password" placeholder="Enter password" />
        </label>
        <label>
          Confirm password:
          <input
            type="password"
            name="password"
            placeholder="Confirm password"
          />
        </label>
        <div className={styles.register_button}>
          <button type="submit" value="Submit">
            <p> Register</p>
          </button>
        </div>
      </form>
      <div className={styles.already_registered}>
        <p>Already have an account - </p>
        <Link to="/user/">
          <p>Login here</p>
        </Link>
      </div>
    </div>
  );
};

export default Register;
