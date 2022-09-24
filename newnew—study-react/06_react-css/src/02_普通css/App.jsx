import React, { PureComponent } from "react";
import "./App.css";
export class App extends PureComponent {
  render() {
    return (
      <div>
        <h2 className="title">我式标题</h2>
        <p className="content">我 式内容</p>
      </div>
    );
  }
}

export default App;
