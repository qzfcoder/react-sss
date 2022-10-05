import {
  ADD_NUMBER,
  DEL_NUMBER,
  CHANGE_BANNER,
  CHANGE_RECOMMEND,
} from "./constants";

const initialState = {
  counter: 100,
  banner: [{ title: "1" }, { title: "2" }, { title: "3" }],
  recommend: [{ title: "a" }, { title: "b" }, { title: "v" }],
};
export function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_NUMBER:
      return { ...state, counter: state.counter + action.num };
    case DEL_NUMBER:
      return { ...state, counter: state.counter - action.num };
    case CHANGE_BANNER:
      return { ...state, banner: action.banner };
    case CHANGE_RECOMMEND:
      return { ...state, recommend: action.recommend };
    default:
      return state;
  }
}
export default reducer;
