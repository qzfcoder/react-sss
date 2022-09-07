import React, { Component } from "react";
import { flushSync } from "react-dom";
export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "hello",
      counter: 0,
    };
  }
  changeText() {
    setTimeout(() => {
      flushSync(() => {
        this.setState({ message: "hello123213" });
      });
      console.log(this.state.message);
    }, 0);
  }
  increment() {
    // 异步操作,在多次调用setState的时候,可以同时执行,不用进行三次分别执行

    // 下方这样来写 counter取到的是0,默认都是0加1,等于三步一样的操作
    // this.setState({
    //   counter: this.state.counter + 1,
    // });
    // this.setState({
    //   counter: this.state.counter + 1,
    // });
    // this.setState({
    //   counter: this.state.counter + 1,
    // });

    // 另一种,这样写也只会执行一次, counter为2
    this.setState((state) => {
      return {
        counter: state.counter + 1,
      };
    });
    this.setState((state) => {
      return {
        counter: state.counter + 1,
      };
    });
  }
  render() {
    const { message, counter } = this.state;
    console.log(counter);
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
