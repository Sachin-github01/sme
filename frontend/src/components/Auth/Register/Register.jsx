import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Register.module.css";

const Register = () => {
  const [error, setError] = useState({ status: false, msg: "", type: "" });
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

    const data = new FormData(e.currentTarget);
    const actualData = {
      name: data.get("name"),
      email: data.get("email"),
      password: data.get("password"),
      confirm_password: data.get("confirm_password"),
      tc: data.get("tc"),
    };
    if (
      actualData.email &&
      actualData.email &&
      actualData.password &&
      actualData.tc !== null
    ) {
      if (actualData.password === actualData.confirm_password) {
        document.getElementById("registration").reset();
        setError({
          status: true,
          msg: "Registration Successfull",
          type: "success",
        });
        // navigate("/user-login/");
        setTimeout(() => {
          navigate("/user-login/");
        }, 1000); // 1 seconds delay
      } else {
        setError({
          status: true,
          msg: "Password doesn't match",
          type: "error",
        });
      }
    } else {
      setError({ status: true, msg: "All fields are required", type: "error" });
    }
  };

  return (
    <div className={styles.register_wrapper}>
      <h2>Register</h2>
      <form id="registration" noValidate onSubmit={handleSubmit}>
        <label>
          Enter your name:
          <input type="text" name="name" placeholder="Enter your name" />
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
            name="confirm_password"
            placeholder="Confirm password"
          />
        </label>
        {/* check mark  */}
        <div className={styles.register_tc}>
          <input type="checkbox" id="tc" name="tc" value="agree" />
          <h5>
            {" "}
            I agree to term and conditions{" "}
            <Link to="/tc">
              <p>read</p>
            </Link>
          </h5>
        </div>
        <div className={styles.register_button}>
          <button type="submit" value="Submit">
            <p> Register</p>
          </button>
        </div>
      </form>
      <div className={styles.already_registered}>
        <h5>Already have an account - </h5>
        <Link to="/user-login/">
          <p>Login here</p>
        </Link>
      </div>
      <div className={styles.register_alert}>
        {error.status ? <p>{error.msg}</p> : ""}
      </div>
    </div>
  );
};

export default Register;
