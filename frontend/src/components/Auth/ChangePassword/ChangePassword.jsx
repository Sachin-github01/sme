import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./CP.module.css";
import { useChangeUserPasswordMutation } from "../../../redux/userAuthApi";
import { getToken } from "../../../redux/LocalStorage";

const ChangePassword = () => {
  const [server_error, setServerError] = useState({});
  const [changeUserPassword, { data, error_success }] =
    useChangeUserPasswordMutation();
  const { access_token } = getToken();

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const actualData = {
      password: data.get("password"),
      password2: data.get("password2"),
    };
    const res = await changeUserPassword({ actualData, access_token });
    if (res.error) {
      setServerError(res.error.data.errors);
    }
    if (res.data) {
      setServerError(res.data);
      document.getElementById("changepassword").reset();
      setTimeout(() => {
        navigate("/login/");
      }, 1000); // 1 second delay
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
            placeholder="Confirm password:"
          />
          {server_error.password2 ? (
            <p className={styles.custom_error}>{server_error.password2[0]}</p>
          ) : (
            ""
          )}
        </label>
        <div className={styles.change_password_button}>
          <button type="submit" value="Submit">
            <p>Update</p>
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

export default ChangePassword;
