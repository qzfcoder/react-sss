import React, { PureComponent } from "react";
// import store from '../store'
import { connect } from "react-redux";
import store from "../store";
import { addNumberAction, delNumberAction } from "../store/actionCreator";
export class About extends PureComponent {
  calcNumber(e, idADD) {
    if (idADD) {
      // store.dispatch(addNumberAction(e));
      this.props.addNumber(e);
    } else {
      store.dispatch(delNumberAction(e));
    }
  }
  render() {
    const { counter } = this.props;
    return (
      <div>
        <h2>About counter : {counter}</h2>
        <div>
          <button onClick={(e) => this.calcNumber(22, true)}>+22</button>
          <button onClick={(e) => this.calcNumber(33, false)}>-33</button>
          <button onClick={(e) => this.calcNumber(11, true)}>+11</button>
        </div>
      </div>
    );
  }
}

function map(state) {
  return {
    counter: state.counter,
    // banner: state.banner
  };
}
// 接受的是dispatch
const fn2 = (dispatch) => {
  return {
    addNumber(num) {
      dispatch(addNumberAction(num));
    },
    subNumber() {},
  };
};
export default connect(map, fn2)(About);
