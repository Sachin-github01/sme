import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styles from "./RPW.module.css";
import { useResetPasswordMutation } from "../../../redux/userAuthApi";

const ResetPassword = () => {
  const [server_error, setServerError] = useState({});
  const [resetpassword, { data, error_success }] = useResetPasswordMutation();
  const { id, token } = useParams();

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData(e.currentTarget);
    const actualData = {
      password: data.get("password"),
      password2: data.get("password2"),
    };
    const res = await resetpassword({ actualData, id, token });
    if (res.error) {
      setServerError(res.error.data.errors);
    }
    if (res.data) {
      setServerError({});
      document.getElementById("resetpassword").reset();
      setTimeout(() => {
        navigate("/login");
      }, 3000);
    }
  };
  return (
    <div className={styles.reset_password}>
      <h2>Reset your password</h2>
      <form id="resetpassword" noValidate onSubmit={handleSubmit}>
        <label>
          Enter New password:
          <input type="password" name="password" placeholder="Enter password" />
          {server_error.password ? (
            <p className={styles.custom_error}>{server_error.password[0]}</p>
          ) : (
            ""
          )}
        </label>
        <label>
          Confirm New password:
          <input
            type="password"
            name="password2"
            placeholder="Enter confirm password"
          />
          {server_error.password2 ? (
            <p className={styles.custom_error}>{server_error.password2[0]}</p>
          ) : (
            ""
          )}
        </label>
        <div className={styles.rese_password_button}>
          <button type="submit" value="Submit">
            <p> Reset</p>
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
    </div>
  );
};

export default ResetPassword;
