import React, { Component } from "react";

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "hello",
      counter: 0,
    };
  }
  changeText() {
    // setState操作是异步的，及更多用法
    // 1、基本使用
    // this.setState({ message: "asdas" });

    // 2、回调函数
    // 可以在回调函数中处理state内部数据的逻辑
    // this.setState((state, props) => {
    //   console.log(state, props)
    //   return { message: "asd" };
    // });

    // 3、setState在react的事件处理中是一个异步调用
    // 如果在数据更新之后数据合并获得对应的执行结果执行一些代码
    // 可以在setState中传日第二个参数
    this.setState({ message: "asdas" }, () => {
      console.log("afterafter");
    });
    console.log("nownownownwo");
  }
  increment() {}
  render() {
    const { message, counter } = this.state;
    return (
      <div>
        <h2>message:{message}</h2>
        <button onClick={(e) => this.changeText()}>修改文本</button>
        <h2>当前计数:{counter}</h2>
        <button onClick={(e) => this.increment()}>counter +1</button>
      </div>
    );
  }
}

export default App;
