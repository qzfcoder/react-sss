import React, { PureComponent } from "react";

export class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      isAgree: true,
      hobbies: [
        {
          value: "sing",
          text: "唱",
          isChecked: false,
        },
        {
          value: "drump",
          text: "跳",
          isChecked: false,
        },
        {
          value: "eat",
          text: "吃",
          isChecked: false,
        },
      ],
      selectSome: "apple",
      selectArr: ["apple", "华为"],
    };
  }
  handleSubmitClick(e) {
    // 阻止浏览器默认行为
    e.preventDefault();
    // 获取所有的表单数据，对数据进行处理，
    console.log("数据", this.state);
    console.log(
      "筛选勾选到的数据：",
      this.state.hobbies
        .filter((item) => item.isChecked)
        .map((item) => item.value)
    );
    // 以网络请求的方式，讲数据发送给服务器
  }
  handleChangeBox(e) {
    this.setState({
      isAgree: e.target.checked,
    });
  }
  handleChange(e, f) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }
  handleChangeBoxs(e, index) {
    const hobbies = [...this.state.hobbies];
    hobbies[index].isChecked = e.target.checked;
    this.setState({
      hobbies: hobbies,
    });
  }

  render() {
    const { username, password, isAgree, hobbies, selectSome, selectArr } =
      this.state;
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
              onChange={(e) => this.handleChange(e)}
            ></input>
          </label>
          <br />
          <label htmlFor="password">
            密码：
            <input
              type="text"
              name="password"
              value={password}
              onChange={(e) => this.handleChange(e)}
            ></input>
          </label>
          <br />
          {/* checkboxs */}
          <label htmlFor="checkbox">
            <input
              type="checkbox"
              id="checkbox"
              name="checkbox"
              checked={isAgree}
              onChange={(e) => this.handleChangeBox(e)}
            />
            统一协议
          </label>
          <br />
          {/* checkbox多选 */}
          <div>
            您的爱好：
            {hobbies.map((hobbie, index) => {
              return (
                <label htmlFor={hobbie.value} key={hobbie.value}>
                  <input
                    type="checkbox"
                    id={hobbie.value}
                    name={hobbie.value}
                    checked={hobbie.checked}
                    onChange={(e) => this.handleChangeBoxs(e, index)}
                  />
                  {hobbie.text}
                </label>
              );
            })}
            {/* <label htmlFor="sing">
              <input
                type="checkbox"
                id="sing"
                name="sing"
                checked={isAgree}
                onChange={(e) => this.handleChangeBox(e)}
              />
              唱
            </label>
            <label htmlFor="drump">
              <input
                type="checkbox"
                id="drump"
                name="drump"
                checked={isAgree}
                onChange={(e) => this.handleChangeBox(e)}
              />
              跳
            </label>
            <label htmlFor="eat">
              <input
                type="checkbox"
                id="eat"
                name="eat"
                checked={isAgree}
                onChange={(e) => this.handleChangeBox(e)}
              />
              吃
            </label> */}
          </div>
          {/* select组件 */}
          <select
            name=""
            id=""
            value={selectSome}
            onChange={(e) => this.handleChange(e)}
          >
            <option value="apple">apple</option>
            <option value="华为">华为</option>
            <option value="vivo">vivo</option>
          </select>
          <selec
            name=""
            id=""
            value={selectArr}
            multiple
            onChange={(e) => this.handleChange(e)}
          >
            <option value="apple">apple</option>
            <option value="华为">华为</option>
            <option value="vivo">vivo</option>
          </selec>
          <br />
          <button type="submit">提交</button>
        </form>
      </div>
    );
  }
}

export default App;
