import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Register.module.css";
import { useUserRegistrationMutation } from "../../../redux/userAuthApi";
import { storeToken } from "../../../redux/LocalStorage";

const Register = () => {
  const [server_error, setServerError] = useState({});
  const navigate = useNavigate();

  const [userRegistration, { data, isLoading, error_success }] =
    useUserRegistrationMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const actualData = {
      name: data.get("name"),
      email: data.get("email"),
      password: data.get("password"),
      password2: data.get("password2"),
      tc: data.get("tc"),
    };
    const res = await userRegistration(actualData);
    if (res.error) {
      setServerError(res.error.data.errors);
    }
    if (res.data) {
      storeToken(res.data.token);
      setServerError(res.data);
      setTimeout(() => {
        navigate("/login/");
      }, 1000); // 1 second delay
    }
  };

  return (
    <div className={styles.register_wrapper}>
      <h2>Register</h2>

      <form id="registration" noValidate onSubmit={handleSubmit}>
        <label>
          Enter your name:
          <input type="text" name="name" placeholder="Enter your name" />
          {server_error.name ? (
            <p className={styles.custom_error}>{server_error.name[0]}</p>
          ) : (
            ""
          )}
        </label>
        <label>
          Enter your email:
          <input type="email" name="email" placeholder="Enter your email" />
          {server_error.email ? (
            <p className={styles.custom_error}>{server_error.email[0]}</p>
          ) : (
            ""
          )}
        </label>
        <label>
          Enter your password:
          <input type="password" name="password" placeholder="Enter password" />
          {server_error.password ? (
            <p className={styles.custom_error}>{server_error.password[0]}</p>
          ) : (
            ""
          )}
        </label>
        <label>
          Confirm password:
          <input
            type="password"
            name="password2"
            placeholder="Confirm password"
          />
          {server_error.password2 ? (
            <p className={styles.custom_error}>{server_error.password2[0]}</p>
          ) : (
            ""
          )}
          <div className={styles.non_field_error}>
            {server_error.non_field_errors ? (
              <p>{server_error.non_field_errors[0]}</p>
            ) : (
              ""
            )}
          </div>
        </label>
        {/* check mark  */}
        <div className={styles.register_tc}>
          <input type="checkbox" id="tc" name="tc" value={true} />

          <h5>
            {" "}
            I agree to term and conditions{" "}
            <Link to="/tc">
              <p>read</p>
            </Link>
          </h5>
        </div>
        <br />
        <div className={styles.tc}>
          {server_error.tc ? (
            <p className={styles.custom_error}>{server_error.tc[0]}</p>
          ) : (
            ""
          )}
        </div>
        <div className={styles.register_button}>
          <button type="submit" value="Submit">
            <p> Register</p>
          </button>
        </div>
      </form>
      {/* Display message on Successfull Registration  */}
      <div className={styles.success_message}>
        {data && data.message && <h4>{data.message}</h4>}
        {error_success && <p>{error_success.message}</p>}
      </div>
      {/* login link  */}
      <div className={styles.already_registered}>
        <h5>Already have an account - </h5>
        <Link to="/user-login/">
          <p>Login here</p>
        </Link>
      </div>
    </div>
  );
};

export default Register;
