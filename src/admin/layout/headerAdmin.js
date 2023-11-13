import React, { Fragment } from "react";
// import styles from "./inputAdmin.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../layout/img/logo.png";

const HeaderAdmin = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-3">
          <img src={logo} alt="logo" />
        </div>
        <div className="col-6"></div>
        <div className="col-3">
          <img src="" alt="admin" />
        </div>
      </div>
    </div>
  );
};

export default HeaderAdmin;
