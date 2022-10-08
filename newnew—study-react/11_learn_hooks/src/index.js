import React from "react";
import ReactDOM from "react-dom/client";
import { UserContext, ThemeContext } from "./05_useContext/context";

import App from "./07_useCallback和useMemo的使用/App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <UserContext.Provider value={{ name: "123" }}>
      <ThemeContext.Provider value={{ color: "red" }}>
        <App />
      </ThemeContext.Provider>
    </UserContext.Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
