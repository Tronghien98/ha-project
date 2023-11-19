import React from "react"; // nạp thư viện react
import ReactDOM from "react-dom"; // nạp thư viện react-dom
import InputAdmin from "./UI/InputAdmin/inputAdmin";
import Login from "./login/login";
import Dashboard from "./admin/layout/dashboard";
import Category from "./admin/layout/category/category";

// Tạo component App
function App() {
  return (
    <div>
      {/* <Login /> */}
      {/* <Dashboard /> */}
      <Category />
    </div>
  );
}

// Render component App vào #root element
ReactDOM.render(<App />, document.getElementById("root"));
