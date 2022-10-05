import React, { PureComponent } from "react";
import { Navigate } from "react-router-dom";
export class Login extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: false,
    };
  }
  login() {
    this.setState({ isLogin: true });
  }
  render() {
    const { isLogin } = this.state;
    return (
      <div>
        Login
        {isLogin ? (
          <Navigate to="/home"></Navigate>
        ) : (
          <button onClick={(e) => this.login()}>登录</button>
        )}
      </div>
    );
  }
}

export default Login;
