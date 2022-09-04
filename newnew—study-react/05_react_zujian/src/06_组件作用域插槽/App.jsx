import React, { Component } from "react";
import TabControl from "./TabControl";
export default class App extends Component {
  constructor() {
    super();
    this.state = {
      titles: ["流行", "最新", "精选"],
      tabIndex: 0,
    };
  }
  tabClick(e) {
    this.setState({
      tabIndex: e,
    });
  }
  render() {
    const { titles, tabIndex } = this.state;
    return (
      <div>
        <TabControl
          titles={titles}
          tabClick={(e) => this.tabClick(e)}
          itemType={(e) => e}
        ></TabControl>
        <h1>{titles[tabIndex]}</h1>
      </div>
    );
  }
}
