import React from "react";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className={styles.navbar_wrapper}>
      <div className={styles.logo}>
        <Link to="/">
          <h2>VEUZON</h2>
        </Link>
      </div>
      <div className={styles.user}>
        <Link to="/user">
          <span>Login/Register</span>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
