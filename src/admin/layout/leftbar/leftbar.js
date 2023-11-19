import React, { Fragment } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./leftbarAdmin.module.css";

const Leftbar = () => {
  return (
    <div className={`${styles.containerLeftbar}`}>
      <nav className="navbar navbar-vertical">
        <ul className="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" href="#">
              Menu 1
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Menu 2
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Menu 3
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default Leftbar;
