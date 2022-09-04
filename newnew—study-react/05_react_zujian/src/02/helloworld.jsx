import React, { Component } from "react";

export default class HelloWorld extends Component {
  // 第一步1
  constructor() {
    console.log(3);
    super();
    this.state = {
      message: "app helloWorld",
    };
  }
  changeMessage = () => {
    this.setState({
      message: this.state.message + "1",
    });
  };
  // 第二部
  render() {
    console.log(4);
    const { message } = this.state;
    return (
      <div>
        {message}
        <button onClick={(e) => this.changeMessage()}>修改文本</button>
      </div>
    );
  }
  // 第三步 组件被渲染到dom上
  componentDidMount() {
    console.log(5);
  }
  //第四步组件被更新完成
  // 可以拿到更新前的数据，可以冲getSnapshotBeforeUpdate中获取
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log(6);
  }
  componentWillUnmount() {
    console.log("unMounted----7");
  }
  // 控制能否执行render函数
  shouldComponentUpdate() {
    return true;
  }
  getSnapshotBeforeUpdate() {
    // 可以在react更新dom之前，可以获取dom更新前的一些数据
  }
}
