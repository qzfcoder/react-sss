import axios from "axios";
import {
  CHANGE_BANNER,
  CHANGE_RECOMMEND,
} from "./constants";

export const changeBannerAction = (banner) => ({
  type: CHANGE_BANNER,
  banner,
});
export const changeRecommendAction = (recommend) => ({
  type: CHANGE_RECOMMEND,
  recommend,
});

export const fetchHomeMultidataAction = (homeMultidata) => {
  // 如果是一个普通的action，那么这里需要返回一个对象。
  // 返回的对象中不能直接拿到服务器返回的异步数据的
  // return {};
  // 如果返回的是一个函数，redux是不支持的，要用新的包redux-thunk。
  function foo(dispatch, getState) {
    // 异步操作
    console.log("1", getState().counter);
    axios.get("http://123.207.32.32:8000/home/multidata").then((res) => {
      const banner = res.data.data.banner.list;
      const recommend = res.data.data.recommend.list;
      dispatch(changeBannerAction(banner));
      dispatch(changeRecommendAction(recommend));
    });
  }
  return foo;
};
