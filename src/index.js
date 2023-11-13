import React from "react"; // nạp thư viện react
import ReactDOM from "react-dom"; // nạp thư viện react-dom
import InputAdmin from "./UI/InputAdmin/inputAdmin";

// Tạo component App
function App() {
  return (
    <div>
      <h1> sfcdvd</h1>
      <InputAdmin label="User name:" type="text"></InputAdmin>
    </div>
  );
}

// Render component App vào #root element
ReactDOM.render(<App />, document.getElementById("root"));
