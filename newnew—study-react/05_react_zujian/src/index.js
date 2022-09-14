import React from "react";
import ReactDOM from "react-dom/client";
// import './index.css';
import App from "./14_React的Protials/App.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // ，默认就是StrictMode下。StrticMode默认会执行两次render，来检测你的render函数有没有副作用。
  // 会导致按钮点击render函数执行2次
  // <React.StrictMode>
  <App />
  // </React.StrictMode>
);
