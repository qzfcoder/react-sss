// 编写react代码，通过react渲染内容
// import  {ReactDOM} from "react";  //react 16-17中这样引入
import React from "react";
import ReactDOM from "react-dom/client";

import App from "./app";

const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(<App></App>);
