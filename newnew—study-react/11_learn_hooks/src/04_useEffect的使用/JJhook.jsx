import React, { memo, useState, useEffect } from "react";

const JJhook = memo(() => {
  const [counter, setCounter] = useState(200);
  useEffect(() => {
    // 当前传入的回调函数会在组件渲染完成后,自动执行的
    // 网络请求,异步操作等
    document.title = counter;
  });
  return (
    <div>
      JJhook: {counter}
      <button onClick={(e) => setCounter(counter + 1)}>+1</button>
    </div>
  );
});

export default JJhook;
