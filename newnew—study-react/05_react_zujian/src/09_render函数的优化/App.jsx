import React, { PureComponent } from "react";
import Home from "./Home";
import Recommend from "./Recommend";
import Profile from "./Profile";

// PureComponent 来方便我们处理shouldComponentUpdate来进行性能优化
export class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      message: "123",
      counter: 0,
    };
  }
  // shouldComponentUpdate(nextProps, nextState) {
  // 这样写,处理优化不现实
  // if (
  //   this.state.message !== nextState.message ||
  //   this.state.counter !== nextState.counter
  // ) {
  //   return true;
  // } else {
  //   return false;
  // }
  // }
  changeMsg() {
    this.setState({ message: "修改后" });
  }
  increment() {
    this.setState({ counter: this.state.counter + 1 });
  }
  render() {
    console.log("App");
    const { message, counter } = this.state;
    return (
      <div>
        <h2>
          {message}--{counter}
        </h2>
        <button onClick={(e) => this.changeMsg()}>修改文案</button>
        <button onClick={(e) => this.increment()}>counter + 1</button>
        <Home message={message}></Home>
        <Recommend></Recommend>
        <Profile message={message}></Profile>
      </div>
    );
  }
}

export default App;
