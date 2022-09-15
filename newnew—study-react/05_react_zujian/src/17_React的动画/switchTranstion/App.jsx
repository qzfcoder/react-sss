import React, { PureComponent } from "react";
import { SwitchTransition, CSSTransition } from "react-transition-group";
import "./style.css";
export class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: true,
    };
  }
  render() {
    const { isLogin } = this.state;
    return (
      <div>
        {/* <button onClick={(e) => this.setState({ isLogin: !isLogin })}>
          {isLogin ? "注销" : "登录"}
        </button> */}
        <SwitchTransition mode="in-out">
          <CSSTransition
            key={isLogin ? "exit" : "login"}
            classNames="login"
            timeout={1000}
          >
            <button onClick={(e) => this.setState({ isLogin: !isLogin })}>
              {isLogin ? "注销" : "登录"}
            </button>
          </CSSTransition>
        </SwitchTransition>
      </div>
    );
  }
}

export default App;
