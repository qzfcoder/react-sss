import { memo, useState } from "react";

// 普通函数不能使用hooks
// 在自定义的hooks中，可以使用react提供的其他hooks
// function foo() { // 报错
function useFoo() {
  // 可以用自定义hooks， use开头表示自定义hooks
  const [msg] = useState("123");
  return msg;
}

// useState 定义状态的
function CounterHook(props) {
  // let counter = 0;
  // let arr = useState(0);
  const [counter, setCounter] = useState(0);
  const msg = useFoo();
  console.log(msg);
  return (
    <div>
      <h2>当前计数：{counter}</h2>
      <button onClick={(e) => setCounter(counter + 1)}>+1</button>
      <button onClick={(e) => setCounter(counter - 1)}>-1</button>
      {/* <h2>当前计数：{arr[0]}</h2>
      <button onClick={(e) => arr[1](arr[0] + 1)}>+1</button>
      <button onClick={(e) => arr[1](arr[0] - 1)}>-1</button> */}
    </div>
  );
}

export default memo(CounterHook);
