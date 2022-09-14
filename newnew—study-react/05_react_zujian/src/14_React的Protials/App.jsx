import React, { PureComponent } from "react";
import { createPortal } from "react-dom";
import Modal from "./Modal";
export class App extends PureComponent {
  render() {
    return (
      <div className="app">
        <h1>h1</h1>
        {createPortal(<h2>h2</h2>, document.querySelector("#test"))}
        <Modal>
          <h2>1</h2>
          <h2>2</h2>
        </Modal>
      </div>
    );
  }
}

export default App;
