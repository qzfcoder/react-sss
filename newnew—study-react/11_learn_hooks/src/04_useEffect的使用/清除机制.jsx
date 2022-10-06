// import React, { PureComponent } from "react";

// export class App extends PureComponent {
//   constructor(props) {
//     super(props);
//     this.state = {};
//   }
//   componentDidMount() {
//     // 可以进行网络请求等等
//   }
//   render() {
//     return <div>App</div>;
//   }
// }

// export default App;

import React, { memo, useEffect } from "react";
import JJclass from "./JJclass";
import JJhook from "./JJhook";
const App = memo(() => {
  // 生命周期
  // 网络请求/监听事件

  // useEffect 告知react,在执行完当前组件渲染后,要执行的副作用函数
  useEffect(() => {
    // const unsubscribe = store.subscribe(() => {});

    // 可以有一个返回值, 回调函数 ,该回调函数会在组件重新被渲染或者被销毁的时候执行
    return () => {};
  });
  return (
    <div>
      App
      <JJhook></JJhook>
      <hr />
      <JJclass></JJclass>
    </div>
  );
});

export default App;
