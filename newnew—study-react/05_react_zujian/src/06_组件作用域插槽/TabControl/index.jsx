import React, { Component } from "react";
import "./style.css";
export default class TabControl extends Component {
  constructor() {
    super();
    this.state = {
      currentIndex: 0,
    };
  }
  itemClick = (e) => {
    this.setState({
      currentIndex: e,
    });
    this.props.tabClick(e);
  };
  render() {
    const { titles, itemType } = this.props;
    const { currentIndex } = this.state;
    return (
      <div className="tab-control">
        {titles.map((item, index) => {
          return (
            <div
              className={`item ${currentIndex === index ? "active" : ""}`}
              key={item}
              onClick={() => this.itemClick(index)}
            >
              {/* <span>{item}</span> */}
              <span>{itemType(item)}</span>
            </div>
          );
        })}
      </div>
    );
  }
}
