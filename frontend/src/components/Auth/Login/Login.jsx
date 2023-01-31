import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Login.module.css";

import { useUserLoginMutation } from "../../../redux/userAuthApi";
import { getToken, storeToken } from "../../../redux/LocalStorage";
import { setUserToken } from "../../../redux/authSlice";
import { useEffect } from "react";

const Login = () => {
  const [server_error, setServerError] = useState({});

  const navigate = useNavigate();

  const [userLogin, { data, isLoading, error_success }] =
    useUserLoginMutation();

  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData(e.currentTarget);

    const actualData = {
      email: data.get("email"),
      password: data.get("password"),
    };
    const res = await userLogin(actualData);
    if (res.error) {
      console.log(res.error.data.errors);
      setServerError(res.error.data.errors);
    }
    if (res.data) {
      storeToken(res.data.token);
      let { access_token } = getToken();
      dispatch(setUserToken({ access_token: access_token }));
      setTimeout(() => {
        navigate("/user/profile");
      }, 1000); // 1 second delay
    }
  };

  let { access_token } = getToken();
  useEffect(() => {
    dispatch(setUserToken({ access_token: access_token }));
  }, [access_token, dispatch]);

  return (
    <div className={styles.login_wrapper}>
      <h2>Login</h2>
      <form id="login" noValidate onSubmit={handleSubmit}>
        <label>
          Enter your email:
          <input
            type="email"
            name="email"
            placeholder="Enter email:"
            required
          />
          {server_error.email ? (
            <p className={styles.custom_error}>{server_error.email[0]}</p>
          ) : (
            ""
          )}
        </label>
        <label>
          Enter your password:
          <input
            type="password"
            name="password"
            placeholder="Enter password:"
            required
          />
          {server_error.password ? (
            <p className={styles.custom_error}>{server_error.password[0]}</p>
          ) : (
            ""
          )}
        </label>
        <div className={styles.login_button}>
          <button type="submit" value="Submit">
            <p> Login</p>
          </button>
        </div>
      </form>
      <div className={styles.success_message}>
        {data && data.message && <h4>{data.message}</h4>}
        {error_success && <p>{error_success.message}</p>}
      </div>
      <div className={styles.non_field_error}>
        {server_error.non_field_errors ? (
          <p>{server_error.non_field_errors[0]}</p>
        ) : (
          ""
        )}
      </div>
      <div className={styles.user2}>
        <div className={styles.forgot_password}>
          <Link to="/user/forgot-password/">
            <p>Forgot password ?</p>
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
