import React, { Component } from "react";
import eventBus from "./utils/event-bus";
export class HomeBanner extends Component {
  preClick(e) {
    console.log("上一个");
    eventBus.emit("bannerPrev", "上一个发送");
  }
  nextClick(e) {
    console.log("下一个");
    eventBus.emit("bannerNext", "下一个发送");
  }
  render() {
    return (
      <div>
        HomeBanner
        <button onClick={(e) => this.preClick(e)}>上一个</button>
        <button onClick={(e) => this.nextClick(e)}>下一个</button>
      </div>
    );
  }
}

export default HomeBanner;
