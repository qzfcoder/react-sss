import React, { Component } from "react";
import ThemeContext from "./context/theme-context";
import UserContext from "./context/user-context";
export class HomeInfo extends Component {
  render() {
    console.log(this.context, "111111111111111");
    return (
      <div>
        HomeInfo-----{this.context.color}---
        <UserContext.Consumer>
          {(value) => {
            return value.color;
          }}
        </UserContext.Consumer>
      </div>
    );
  }
}

HomeInfo.contextType = ThemeContext;

export default HomeInfo;
