import React, { PureComponent } from "react";

export class Home extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      friends: [],
    };
  }
  // shouldComponentUpdate(nextProps, nextState) {
     // 这样写,处理优化不现实
    // if (this.props.message !== nextProps.message) {
    //   return true;
    // } else {
    //   return false;
    // }
  // }
  render() {
    console.log("Home");
    const { message } = this.props;
    return (
      <div>
        <h2>Home Page{message}</h2>
      </div>
    );
  }
}

export default Home;
