import React, { Fragment } from "react";
import styles from "./inputAdmin.module.css";
import "bootstrap/dist/css/bootstrap.min.css";

const InputAdmin = (prop) => {
  const classInput = "lg-12";
  return (
    <div className={styles.grInput}>
      <label className={styles.label}>{`${prop.label}`}</label>
      <input
        className={`${styles.input} ${classInput}`}
        type={`${prop.type}`}
      />
    </div>
  );
};

export default InputAdmin;
