import React from "react";
import { NavLink, Link } from "react-router-dom";
import ChangePassword from "../ChangePassword/ChangePassword";
import styles from "./Profile.module.css";

const Profile = () => {
  return (
    <div className={styles.profile_wrapper}>
      <h2>Profile</h2>
      <div className={styles.profile_data}>
        <span>Email: sachin@gmail.com</span>
        <span>Name: Sachin Pradhan</span>
      </div>
      <div className={styles.change_password}>
        <Link to="/user/profile/change-password/">
          <h5>Chage password</h5>
        </Link>
      </div>

      <div className={styles.logout}>
        <Link to="/">
          <h6>Login out</h6>
        </Link>
      </div>
    </div>
  );
};

export default Profile;
