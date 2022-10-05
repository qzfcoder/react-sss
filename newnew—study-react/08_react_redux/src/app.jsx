import React, { PureComponent } from "react";
import Profile from "./pages/Profile";
import Home from "./pages/Home";
import About from "./pages/About";
import Category from "./pages/Category";
import "./style.css";
import store from "./store";
export class app extends PureComponent {
  constructor() {
    super();
    this.state = {
      counter: store.getState().home.counter,
    };
  }
  componentDidMount() {
    store.subscribe(() => {
      const state = store.getState();
      this.setState({
        counter: state.home.counter,
      });
    });
  }
  render() {
    const { counter } = this.state;

    return (
      <div>
        <h2>App Counter：{counter} </h2>
        <div className="pages">
          <Home></Home>
          <Profile></Profile>
          <About></About>
          <Category></Category>
        </div>
      </div>
    );
  }
}

export default app;
