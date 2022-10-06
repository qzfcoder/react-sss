import React, { memo, useEffect, useState } from "react";
const App = memo(() => {
  const [numer, setNum] = useState(0);
  const [msg, setMsg] = useState("1");
  useEffect(() => {
    // 只依赖number,来改变
    console.log("修改title");
    return () => {};
  }, [numer]);
  useEffect(() => {
    console.log("监听redux中的数据");
    return () => {};
  }, []);
  useEffect(() => {
    console.log("监听eventbus中的事件");
    return () => {};
  }, []);
  useEffect(() => {
    console.log("从服务器获取数据,只需要执行一次");
    return () => {}; // 组件被卸载的时候才会执行
  }, []); // 通过第二个参数来控制, 只执行一次,不受另外的影响
  return (
    <div>
      App:{numer}--{msg}
      <button onClick={(e) => setNum(numer + 1)}>+1</button>
      <button onClick={(e) => setMsg(msg + 1)}>修改msg</button>
    </div>
  );
});

export default App;
