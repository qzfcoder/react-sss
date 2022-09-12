import React, { PureComponent } from "react";

// 定义一个高阶组件
function hoc(WrapperComponent) {
  // 1 等以一个类组件
  class NewCpn extends React.PureComponent {
    render() {
      return (
        <div>
          <WrapperComponent></WrapperComponent> <br /> asd
        </div>
      );
    }
  }
  return NewCpn;
}
class demo extends React.PureComponent {
  render() {
    return <div>123</div>;
  }
}
const Asd = hoc(demo);
export class App extends PureComponent {
  render() {
    return (
      <div>
        <Asd />
        App
      </div>
    );
  }
}

export default App;
