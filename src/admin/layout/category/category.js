import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./category.module.css";

import HeaderAdmin from "../headerAdmin/headerAdmin";
import Leftbar from "../leftbar/leftbar";

const Category = () => {
  return (
    <div>
      <HeaderAdmin />
      <div className="container-fluid">
        <div className="row">
          <div className="col-2 p-0">
            <Leftbar />
          </div>
          <div className={`col-10 ${styles.containerContent}`}>
            <div className={`${styles.containerCategory}`}>
              <div className={`${styles.conditionSeach}`}>
                <form>
                  <div className={`${styles.label}`}>
                    <label>Tên danh mục</label>
                  </div>

                  <input className={`${styles.input}`} />

                  <div>
                    <button className={`${styles.btnSeach}`}>Tìm kiếm</button>
                  </div>
                </form>
              </div>
            </div>
            <div className={`${styles.containerTable}`}>
              <table>
                <tr>
                  <th>Stt</th>
                  <th>Tên danh mục</th>
                  <th></th>
                </tr>
                <tr>
                  <td>1</td>
                  <td>Danh mục 1</td>
                  <td></td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
