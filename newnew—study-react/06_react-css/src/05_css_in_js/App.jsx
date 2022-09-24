import React, { PureComponent } from "react";
import { AppWrapper } from "./style";
export class App extends PureComponent {
  render() {
    return (
      <AppWrapper>
        <div className="section">
          <h2 className="title">我是标题</h2>
          <h2>我式内容</h2>
        </div>
        <div className="footer">
          <p>asd</p>
        </div>
      </AppWrapper>
    );
  }
}

export default App;
