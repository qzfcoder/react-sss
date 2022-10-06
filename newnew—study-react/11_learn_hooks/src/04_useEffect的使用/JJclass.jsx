import React, { PureComponent } from "react";

export default class JJclass extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      counter: 100,
    };
  }
  // componentDidMount() {
  //   document.title = this.state.counter;
  // }
  // componentDidUpdate() {
  //   document.title = this.state.counter;
  // }
  addCounter() {
    this.setState({ counter: this.state.counter + 1 });
  }
  render() {
    const { counter } = this.state;
    return (
      <div>
        JJclass:{counter}
        <button onClick={(e) => this.addCounter()}>+1</button>
      </div>
    );
  }
}
