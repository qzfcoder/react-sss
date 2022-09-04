import React, { Component } from "react";
import NavBar from "./nav-bar";
export class App extends Component {
  render() {
    return (
      <div>
        <NavBar leftSlot={<button>121</button>} centerSlot={321} rightSlot={111}></NavBar>
      </div>
    );
  }
}

export default App;
