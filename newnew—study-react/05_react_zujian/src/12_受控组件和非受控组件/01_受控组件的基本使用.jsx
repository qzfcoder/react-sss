import React, { PureComponent } from "react";

export class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      userName: "asdsad",
    };
  }
  inputChange(event) {
    // console.log(event.target.value);
    this.setState({ userName: event.target.value });
  }
  render() {
    const { userName } = this.state;
    return (
      <div>
        <h2>{userName}</h2>
        {/* 受控组件 要绑定onchange事件,通过setState事件来间接的改变数据 */}
        {/* <input type="text" value={userName}></input> */}
        <input
          type="text"
          value={userName}
          onChange={(e) => this.inputChange(e)}
        />
      </div>
    );
  }
}

export default App;
