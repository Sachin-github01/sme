import React from "react";
import styles from "./Navbar.module.css";
import { Link, NavLink } from "react-router-dom";
import { getToken } from "../../redux/LocalStorage";

const Navbar = () => {
  const { access_token } = getToken();
  return (
    <div className={styles.navbar_wrapper}>
      <div className={styles.logo}>
        <NavLink to="/">
          <h2>VEUZON</h2>
        </NavLink>
      </div>
      {/* After login redirect ot profile  */}
      {access_token ? (
        <div className={styles.user}>
          <NavLink to="/user/profile">
            {/* display user name here from server */}
            <span>Profile</span>
          </NavLink>
        </div>
      ) : (
        <div className={styles.user}>
          <NavLink to="/login">
            <span>Login</span>
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default Navbar;
