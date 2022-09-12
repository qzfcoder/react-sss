import React, { PureComponent } from "react";

// 定义高阶组件
function enhancedUserInfo(OldComponent) {
  class newComponent extends React.PureComponent {
    constructor(props) {
      super(props);
      this.state = {
        name: "qzf",
        age: "25",
      };
    }
    render() {
      return <OldComponent {...this.props} {...this.state} />;
    }
  }
  return newComponent;
}
const Home = enhancedUserInfo(function (props) {
  console.log(props);
  return <h1>Home---{props.name}</h1>;
});
const Profile = enhancedUserInfo(function (props) {
  return <h1>Profile</h1>;
});
const HelloFriend = enhancedUserInfo(function (props) {
  return <h1>HelloFriend</h1>;
});

export class App extends PureComponent {
  render() {
    return (
      <div>
        <Home banners={[1, 2, 3, 4]}></Home>
        <Profile></Profile>
        <HelloFriend></HelloFriend>
      </div>
    );
  }
}

export default App;
