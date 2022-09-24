import React, { PureComponent } from "react";

import appStyle from "./App.module.css";
export class App extends PureComponent {
  render() {
    return (
      <div>
        <h2 className={appStyle.title}>我式标题</h2>
        <p className={appStyle.content}>我 式内容</p>
      </div>
    );
  }
}

export default App;
