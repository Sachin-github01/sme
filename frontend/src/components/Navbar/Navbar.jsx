import React from "react";
import { FaSearch } from "react-icons/fa";
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
      {/* Search Bar  */}
      <div className={styles.search_bar}>
        <input type="text" placeholder="Search..." />
        <button type="button" className={styles.button}>
          <FaSearch className={styles.search_icon} />
        </button>
      </div>
      {/* After login redirect ot profile  */}
      <div className={styles.user_container}>
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
        <div className={styles.dropdown}>
          <ul>
            <li>
              <NavLink to="#">
                <span>Your account</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="#">
                <span>Your orders</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="#">
                <span>Your wishlist</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="#">
                <span>Create store</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/login">
                <span>Logout</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
