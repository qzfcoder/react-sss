import React, { Component } from "react";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      message: "app component",
    };
  }
  render() {
    const { message } = this.state;
    return <div>{message}</div>;
  }
}
