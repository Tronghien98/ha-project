import React, { Fragment } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./dashboard.module.css";
import HeaderAdmin from "./headerAdmin/headerAdmin";
import Leftbar from "./leftbar/leftbar";
import Category from "./category/category";

const Dashboard = () => {
  return (
    <div>
      <HeaderAdmin></HeaderAdmin>
      <div className="container-fluid">
        <div className="row">
          <div className="col-2 p-0">
            <Leftbar />
            <div className={`col-10 ${styles.containerContent}`}></div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
