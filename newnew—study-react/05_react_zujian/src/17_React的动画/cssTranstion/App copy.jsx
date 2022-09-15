import React, { PureComponent } from "react";
import { CSSTransition } from "react-transition-group";
import "./style.css";
export class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isShowTitle: false,
    };
  }
  render() {
    const { isShowTitle } = this.state;
    return (
      <div>
        <button onClick={(e) => this.setState({ isShowTitle: !isShowTitle })}>
          切换
        </button>
        <CSSTransition
          in={isShowTitle}
          unmountOnExit={true}
          classNames="transf"
          timeout={2000}
        >
          <h2>黑黑黑</h2>
        </CSSTransition>
        {/* {isShowTitle && <h2>黑黑黑</h2>} */}
      </div>
    );
  }
}

export default App;
