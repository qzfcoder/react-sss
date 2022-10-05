import React, { PureComponent } from "react";
import store from "../store";
// 参数一： 函数
// 参数二： 函数·
export default function connect(mapStateToProps, mapDispatchToProps) {
  return function (WrapperComponent) {
    class NewComponent extends PureComponent {
      constructor(props) {
        super(props);
        // this.state = {
        //   counter:
        // }
        this.state = mapStateToProps(store.getState());
      }
      componentDidMount() {
        store.subscribe(() => {
          this.forceUpdate();
        });
      }
      render() {
        const stateObj = mapStateToProps(store.getState());
        const stateDispatch = mapDispatchToProps(store.dispatch);
        return (
          <WrapperComponent {...this.props} {...stateObj} {...stateDispatch} />
        );
      }
    }
    return NewComponent;
  };
}
