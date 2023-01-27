import React from "react";
import styles from "./User.module.css";
import Login from "../Login/Login";

const User = () => {
  return (
    <div className={styles.user_wrapper}>
      <Login />
    </div>
  );
};

export default User;
