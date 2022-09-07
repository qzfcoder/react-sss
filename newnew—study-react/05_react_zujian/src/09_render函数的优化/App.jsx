import React, { Component } from "react";
import Home from "./Home";
import Recommend from "./Recommend";
export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "123",
      counter: 0,
    };
  }
  changeMsg() {
    this.setState({ message: "修改后" });
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
        <Home></Home>
        <Recommend></Recommend>
      </div>
    );
  }
}

export default App;
