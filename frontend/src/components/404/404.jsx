import React from "react";
import sad from "../../images/sad.jpg";
import styles from "./404.module.css";

const NotFound = () => {
  return (
    <div className={styles.notfound}>
      <img src={sad} alt="sad" />
      <h1>404 </h1>
      <p>error not found: This link is not valid</p>
    </div>
  );
};

export default NotFound;
