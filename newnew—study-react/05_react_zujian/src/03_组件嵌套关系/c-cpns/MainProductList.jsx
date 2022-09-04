import React, { Component } from "react";

export default class MainProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { productList } = this.props;
    
    return (
      <div>
        MainProductList----------
        <ul>
          {productList.map((item) => {
            return <li key={item.acm}>{item.title}</li>;
          })}
        </ul>
      </div>
    );
  }
}
