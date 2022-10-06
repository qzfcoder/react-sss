import React, { PureComponent } from "react";

class Helloworld extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      msg: "helloworld",
    };
  }
  changeText() {
    this.setState({ msg: "修改后的文本" });
  }
  render() {
    const { msg } = this.state;
    return (
      <div>
        <h2>内容:{msg}</h2>
        <button onClick={(e) => this.changeText()}>修改文本</button>
      </div>
    );
  }
}

function HelloWorld2() {
  let msg = "函数中msg";

  // 函数式组件存在最大的缺陷
  // 1、修改msg之后，组件不知道需要重新渲染
  // 2、如果页面重新渲染：函数会被重新执行，而后续重新执行时候，会重新给msg赋值为hello world
  // 3、类似于生命周期的回调，是没有的
  return (
    <div>
      <h2>内容:{msg}</h2>
      <button onClick={(e) => (msg = "修改后")}>修改文本</button>
    </div>
  );
}

export class App extends PureComponent {
  render() {
    return (
      <div>
        App
        <hr />
        <Helloworld></Helloworld>
        <HelloWorld2></HelloWorld2>
      </div>
    );
  }
}

export default App;
