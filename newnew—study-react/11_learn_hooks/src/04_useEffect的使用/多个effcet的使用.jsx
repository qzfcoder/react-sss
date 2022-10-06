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

import React, { memo, useEffect, useState } from "react";
const App = memo(() => {
  const [numer, setNum] = useState(0);
  // 生命周期
  // 网络请求/监听事件

  // useEffect 告知react,在执行完当前组件渲染后,要执行的副作用函数
  useEffect(() => {
    console.log("修改title");
    return () => {};
  });
  useEffect(() => {
    console.log("监听redux中的数据");
    return () => {};
  });
  useEffect(() => {
    console.log("监听eventbus中的事件");
    return () => {};
  });
  return (
    <div>
      App:{numer}
      <button onClick={(e) => setNum(numer + 1)}>+1</button>
    </div>
  );
});

export default App;
