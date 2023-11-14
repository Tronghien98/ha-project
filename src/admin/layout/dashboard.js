import React, { Fragment } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./dashboard.module.css";
import HeaderAdmin from "./headerAdmin/headerAdmin";
import Leftbar from "./leftbar/leftbar";

const Dashboard = () => {
  return (
    <div>
      <HeaderAdmin></HeaderAdmin>
      <div className="row">
        <div className="col-3">
          <Leftbar></Leftbar>
        </div>
        <div className="col-9"></div>
      </div>
    </div>
  );
};
export default Dashboard;
