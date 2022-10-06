import React, { PureComponent } from "react";

export class HomeRanking extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      rankings: [{}],
    };
  }
  render() {
    return <div>HomeRanking</div>;
  }
}

export default HomeRanking;
