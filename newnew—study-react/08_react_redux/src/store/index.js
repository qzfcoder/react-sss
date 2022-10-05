import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";
import counterreducer from "./counter";
import homereducer from "./home";
// 正常情况下，只能store.dispatch(object)
// 需要派发函数，store.dispatch(function)

// 将两个reducer合并到一起

const reducer = combineReducers({
  counter:counterreducer,
  home:homereducer,
})

// function reducer(state = {}, action) {
//   return {
//     counter: counterreducer(undefined, action),
//     home: homereducer(undefined, action),
//   };
// }
const composeEnhancers = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose;
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));
export default store;
