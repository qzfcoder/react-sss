import React, { Component } from "react";
import HelloWorld from "./helloworld";

export default class App extends Component {
  // 第三步
  constructor() {
    console.log(1);
    super();
    this.state = {
      message: "app component",
      isShowHW: true,
    };
  }
  isShowHelloWorld = () => {
    this.setState({
      isShowHW: !this.state.isShowHW,
    });
  };
  render() {
    const { isShowHW } = this.state;
    console.log(2);
    return (
      <div>
        {isShowHW && <HelloWorld></HelloWorld>}
        <button onClick={this.isShowHelloWorld}>添加或一出</button>
      </div>
    );
  }
}
