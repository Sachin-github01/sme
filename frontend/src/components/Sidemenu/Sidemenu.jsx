import React from "react";
import styles from "./Sidemenu.module.css";
import {
  FaTh,
  FaUserAlt,
  FaThList,
  FaRegChartBar,
  FaCommentAlt,
  FaShoppingBag,
  FaBars,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const Sidemenu = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const menuItem = [
    {
      path: "/dashboard",
      name: "Dashboard",
      icon: <FaTh />,
    },
    {
      path: "/about",
      name: "About",
      icon: <FaUserAlt />,
    },
    {
      path: "/analytics",
      name: "Analytics",
      icon: <FaRegChartBar />,
    },
    {
      path: "/comment",
      name: "Comment",
      icon: <FaCommentAlt />,
    },
    {
      path: "/product",
      name: "Product",
      icon: <FaShoppingBag />,
    },
    {
      path: "/productlist",
      name: "ProductList",
      icon: <FaThList />,
    },
  ];
  return (
    <div className={styles.sidemenu_wrapper}>
      <div
        style={{ width: isOpen ? "300px" : "60px" }}
        className={styles.sidemenu}
      >
        <div className={styles.top_section}>
          <div
            // style={{ marginLeft: isOpen ? "300px" : "0px" }}
            className={styles.bars}
          >
            <FaBars onClick={toggle} className={styles.toggle} />
          </div>
          <h1
            style={{ display: isOpen ? "block" : "none" }}
            className={styles.logo}
          >
            Logo
          </h1>
        </div>
        {menuItem.map((item, index) => (
          <NavLink
            to={item.path}
            key={index}
            className={styles.link}
            activeclassname={styles.active}
          >
            <div className={styles.icon}>{item.icon}</div>
            <div
              style={{ display: isOpen ? "block" : "none" }}
              className={styles.link_text}
            >
              {item.name}
            </div>
          </NavLink>
        ))}
      </div>
      <main>{children}</main>
    </div>
  );
};

export default Sidemenu;
