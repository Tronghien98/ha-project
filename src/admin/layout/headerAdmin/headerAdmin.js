import React, { Fragment } from "react";

import styles from "./headerAdmin.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../img/logo.png";
import user from "../img/icon-user-default.png";

const HeaderAdmin = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-3">
          <img src={logo} alt="logo" />
        </div>
        <div className="col-7"></div>
        <div className="col-2">
          <div className="row">
            <div className="col-9  p-0 align-item-center">
              <p className="text-end mb-0 h4">Admin</p>
            </div>
            <div className="col-3 justify-content-end align-item-center">
              <img src={user} alt="admin" className={`${styles.userAvatar}`} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderAdmin;
