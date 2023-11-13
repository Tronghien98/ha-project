import React from "react"; // nạp thư viện react
import ReactDOM from "react-dom"; // nạp thư viện react-dom
import InputAdmin from "./UI/InputAdmin/inputAdmin";
import HeaderAdmin from "./admin/layout/headerAdmin/headerAdmin";

// Tạo component App
function App() {
  return (
    <div>
      <HeaderAdmin></HeaderAdmin>
    </div>
  );
}

// Render component App vào #root element
ReactDOM.render(<App />, document.getElementById("root"));
