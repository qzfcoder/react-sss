import React, { Component } from "react";
import Header from "./c-cpns/Header";
import Footer from "./c-cpns/Footer";
import Main from "./c-cpns/Main";
import AddCounter from "./c-cpns/AddCounter";
export default class App extends Component {
  constructor() {
    super();
    this.state = {
      counter: 100,
    };
  }
  changeCounter = (f) => {
    console.log(f);
    this.setState({
      counter: this.state.counter + f,
    });
  };
  render() {
    const { counter } = this.state;
    return (
      <div>
        <h2>当前计数：{counter}</h2>
        <AddCounter changeCounter={(f) => this.changeCounter(f)}></AddCounter>
        <Header></Header>
        <Main></Main>
        <Footer></Footer>
      </div>
    );
  }
}
