import React from "react";
import styles from "./Navbar.module.css";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className={styles.navbar_wrapper}>
      <div className={styles.logo}>
        <NavLink to="/">
          <h2>VEUZON</h2>
        </NavLink>
      </div>
      <div className={styles.user}>
        <NavLink to="user-login">
          <span>Login</span>
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
