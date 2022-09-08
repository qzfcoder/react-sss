import React, { PureComponent, createRef } from "react";

export class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
    this.titleRef = createRef();
    this.titleEl = "";
  }
  getNativeDom() {
    // 1 元素上绑定ref的字符串
    console.log(this.refs.hello);
    // 2 通过createRef
    console.log(this.titleRef);
    // 3
    console.log(this.titleEl);
  }
  render() {
    return (
      <div>
        <h2 ref="hello">hello</h2>
        <h2 ref={this.titleRef}>你好</h2>
        <h2
          ref={(e) => {
            this.titleEl = e;
          }}
        >
          你好1231321
        </h2>
        <button onClick={(e) => this.getNativeDom()}>获取Dom</button>
      </div>
    );
  }
}

export default App;
