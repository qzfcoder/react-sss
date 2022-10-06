import React, { memo, useState } from "react";

const App = memo(() => {
  const [msg, setMsg] = useState("hello world");
  function setMsgFn() {
    setMsg("asd");
  }
  return (
    <div>
      App: {msg}
      <button onClick={(e) => setMsg("123")}>修改</button>
      <button onClick={setMsgFn}>修改2</button>
    </div>
  );
});

export default App;
