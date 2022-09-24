import React, { PureComponent } from "react";

export class App extends PureComponent {
  constructor() {
    super();
    this.state = {
      size: 30,
    };
  }
  addFontSize(e = 2) {
    this.setState({
      size: this.state.size + e,
    });
  }
  render() {
    const { size } = this.state;
    return (
      <div>
        <button onClick={(e) => this.addFontSize()}>增加字体大小</button>
        <h2 style={{ color: "red", fontSize: `${size}px` }}>我式标题</h2>
        <p style={{ color: "blue" }}>我式内容</p>
      </div>
    );
  }
}

export default App;
