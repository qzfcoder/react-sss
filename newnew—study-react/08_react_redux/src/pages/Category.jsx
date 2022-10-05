import React, { PureComponent } from "react";
import { connect } from "react-redux";
// import axios from "axios";
import { fetchHomeMultidataAction } from "../store/counter/actionCreator";
export class Category extends PureComponent {
  componentDidMount() {
    // axios.get("http://123.207.32.32:8000/home/multidata").then((res) => {
    //   const banner = res.data.data.banner.list;
    //   const recommend = res.data.data.recommend.list;
    //   this.props.changeBanner(banner);
    //   this.props.changeRecommend(recommend);
    // });
    this.props.fetchHomeMultidata();
  }
  render() {
    return <div>Category Page</div>;
  }
}
const mapDispatchToProps = (dispatch) => ({
  // changeBanner(banner) {
  //   dispatch(changeBannerAction(banner));
  // },
  // changeRecommend(recommend) {
  //   dispatch(changeRecommendAction(recommend));
  // },
  fetchHomeMultidata() {
    dispatch(fetchHomeMultidataAction());
  },
});
export default connect(null, mapDispatchToProps)(Category);
