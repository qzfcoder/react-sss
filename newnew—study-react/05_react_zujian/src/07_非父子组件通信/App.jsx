import React, { Component } from "react";
import Home from "./Home";
import Profile from "./Profile";
import ThemeContext from "./context/theme-context";
import UserContext from "./context/user-context";
export class App extends Component {
  constructor() {
    super();
    this.state = {
      info: { name: 1, age: 2 },
    };
  }
  render() {
    const { info } = this.state;
    return (
      <div>
        {/* <Home name={123} age={12}></Home>
        <Home {...info}></Home> */}
        <UserContext.Provider value={{ color: "blue" }}>
          <ThemeContext.Provider value={{ color: "red" }}>
            <Home {...info}></Home>
          </ThemeContext.Provider>
        </UserContext.Provider>
        <Profile></Profile>
      </div>
    );
  }
}

export default App;
