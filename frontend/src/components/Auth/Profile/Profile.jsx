import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { unSetUserToken } from "../../../redux/authSlice";
import { getToken, removeToken } from "../../../redux/LocalStorage";
import styles from "./Profile.module.css";

import { useGetLoggedUserQuery } from "../../../redux/userAuthApi";
import { useEffect } from "react";
import { setUserInfo, unSetUserInfo } from "../../../redux/userSlice";

const Profile = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { access_token } = getToken();
  const { data, isSuccess } = useGetLoggedUserQuery(access_token);

  const [userData, setUserData] = useState({
    email: "",
    name: "",
  });
  // Store user data in local storage
  useEffect(() => {
    if (data && isSuccess) {
      setUserData({
        email: data.email,
        name: data.name,
      });
    }
  }, [data, isSuccess]);

  //Store user data in redux storage
  useEffect(() => {
    if (data && isSuccess) {
      dispatch(
        setUserInfo({
          email: data.email,
          name: data.name,
        })
      );
    }
  });

  console.log(data);
  const handleLogout = () => {
    dispatch(unSetUserInfo({ name: "", email: "" }));
    dispatch(unSetUserToken({ access_token: null }));
    removeToken();
    navigate("/");
  };

  return (
    <div className={styles.profile_wrapper}>
      <h2>Profile</h2>
      <div className={styles.profile_data}>
        <span>Email: {userData.email}</span>
        <span>Name: {userData.name}</span>
      </div>
      <div className={styles.change_password}>
        <Link to="/user/profile/change-password/">
          <h5>Chage password</h5>
        </Link>
      </div>

      <div className={styles.logout}>
        <button onClick={handleLogout}>
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
};

export default Profile;
