import React, { PureComponent, StrictMode } from "react";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
export class App extends PureComponent {
  render() {
    return (
      <div>
        {
          /**
           * 会帮我们检测不安全的代码
           */
          // ，默认就是StrictMode下。StrticMode默认会执行两次render，来检测你的render函数有没有副作用。
          // 会导致按钮点击render函数执行2次
        }
        <StrictMode>
          <Home></Home>
        </StrictMode>
        <Profile></Profile>
      </div>
    );
  }
}

export default App;
