import React, { PureComponent, createRef } from "react";

class HelloWorld extends PureComponent {
  test() {
    console.log("Hello World-------test");
  }
  render() {
    return <div>HelloWorld</div>;
  }
}

export class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
    this.titleRef = createRef();
    this.titleEl = "";
    this.helloworldRef = "";
  }
  getNativeDom() {
    // 1 元素上绑定ref的字符串
    console.log(this.refs.hello);
    // 2 通过createRef
    console.log(this.titleRef);
    // 3
    console.log(this.titleEl);
    console.log(this.helloworldRef);
    console.log(this.helloworldRef.test());
  }
  render() {
    return (
      <div>
        <HelloWorld ref={(e) => (this.helloworldRef = e)}></HelloWorld>
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
