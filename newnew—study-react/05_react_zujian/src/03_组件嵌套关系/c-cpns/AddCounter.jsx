import React, { Component } from "react";

export default class AddCounter extends Component {
  addOne = (e, f) => {
    console.log(e, f);
    this.props.changeCounter(f);
  };
  render() {
    return (
      <div>
        <button onClick={(e) => this.addOne(e, 1)}>+1</button>
        <button onClick={(e) => this.addOne(e, 5)}>+5</button>
        <button onClick={(e) => this.addOne(e, 10)}>+10</button>
      </div>
    );
  }
}
