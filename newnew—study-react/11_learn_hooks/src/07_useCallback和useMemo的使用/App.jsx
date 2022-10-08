import React, { memo, useState, useCallback, useMemo } from "react";

const Test = memo((props) => {
  const { incerement } = props;
  return (
    <div>
      <button onClick={incerement}>+11</button>
    </div>
  );
});

const App = memo(() => {
  const [counter, setCounter] = useState(0);
  const [msg, setMsg] = useState("123");
  // useCallback 返回同一个函数,存在闭包陷阱
  // 如果要把这个函数传递给子组件
  const incerement = useCallback(
    function (e) {
      setCounter(counter + 1);
    },
    [counter]
  );
  return (
    <div>
      App:{counter}--{msg}
      <button onClick={incerement}>+1</button>
      <button onClick={setMsg(msg + 1)}>msg</button>
      <hr />
      <Test incerement={incerement}></Test>
    </div>
  );
});

export default App;
