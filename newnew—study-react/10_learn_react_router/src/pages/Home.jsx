import React, { PureComponent } from "react";
import { Link, Outlet } from "react-router-dom";
import { withRouter } from "../hoc/withRouter";
class Home extends PureComponent {
  navigateTo(e) {
    const { navigate } = this.props.router;
    navigate(e);
  }
  render() {
    return (
      <div>
        <div className="home-nav">
          <Link to="/home/HomeRecommend">推荐</Link>
          <Link to="/home/HomeRanking">排行榜</Link>
          {/* <Link to="/home/HomeSongMenu">歌单</Link> */}
          <button onClick={(e) => this.navigateTo("/home/HomeSongMenu")}>
            歌单
          </button>
        </div>
        {/* 占位的组件 */}
        <Outlet></Outlet>
      </div>
    );
  }
}

export default withRouter(Home);
