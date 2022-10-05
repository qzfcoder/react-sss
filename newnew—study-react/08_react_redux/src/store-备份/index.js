import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import reducer from "./reducer";
// 正常情况下，只能store.dispatch(object)
// 需要派发函数，store.dispatch(function)
const composeEnhancers = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose;
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));
export default store;
