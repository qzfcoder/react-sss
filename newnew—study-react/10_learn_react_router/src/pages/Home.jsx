import React, { PureComponent } from "react";
import { Link, Outlet } from "react-router-dom";

export default class Home extends PureComponent {
  render() {
    return (
      <div>
        <div className="home-nav">
          <Link to="/home/HomeRecommend">推荐</Link>
          <Link to="/home/HomeRanking">排行榜</Link>
        </div>
        {/* 占位的组件 */}
        <Outlet></Outlet>
      </div>
    );
  }
}
