import React, { Component } from "react";
import Home from "./Home";
import eventBus from "./utils/event-bus";
export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "123",
    };
  }
  componentDidMount() {
    eventBus.on("bannerPrev", (e) => {
      // console.log("监听到", e);
      this.bannerPreClick(e);
    });
    eventBus.on("bannerNext", (e) => {
      // console.log("监听到", e);
      this.bannerPreClick(e);
    });
  }
  bannerPreClick(title) {
    this.setState({
      title: title,
    });
  }
  componentWillUnmount() {
    eventBus.off("bannerPrev", this.bannerPreClick);
  }
  render() {
    const { title } = this.state;
    return (
      <div>
        App---{title}
        <Home></Home>
      </div>
    );
  }
}

export default App;
