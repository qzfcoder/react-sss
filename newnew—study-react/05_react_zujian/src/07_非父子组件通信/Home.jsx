import React, { Component } from "react";
import HomeBanner from "./HomeBanner";
import HomeInfo from "./HomeInfo";
export class Home extends Component {
  render() {
    const { name, age } = this.props;
    return (
      <div>
        {name}--{age}
        <HomeBanner></HomeBanner>
        <HomeInfo></HomeInfo>
      </div>
    );
  }
}

export default Home;
