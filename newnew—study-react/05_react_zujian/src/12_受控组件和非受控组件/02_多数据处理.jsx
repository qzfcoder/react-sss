import React, { PureComponent } from "react";

export class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
  }
  handleSubmitClick(e) {
    // 阻止浏览器默认行为
    e.preventDefault();
    // 获取所有的表单数据，对数据进行处理，
    console.log("数据", this.state);
    // 以网络请求的方式，讲数据发送给服务器
  }
  handleChange(e, f) {
    this.setState({
      [f]: e.target.value,
    });
  }

  render() {
    const { username, password } = this.state;
    return (
      <div>
        <form onSubmit={(e) => this.handleSubmitClick(e)}>
          <label htmlFor="username">
            用户：
            <input
              id="username"
              type="text"
              name="username"
              value={username}
              onChange={(e) => this.handleChange(e, "username")}
            ></input>
          </label>
          <br />
          <label htmlFor="password">
            密码：
            <input
              type="text"
              name="password"
              value={password}
              onChange={(e) => this.handleChange(e, "password")}
            ></input>
          </label>
          <button type="submit">提交</button>
        </form>
      </div>
    );
  }
}

export default App;
