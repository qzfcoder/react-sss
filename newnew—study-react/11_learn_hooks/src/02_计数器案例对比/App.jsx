// import React, { PureComponent } from "react";

// export class App extends PureComponent {
//   render() {
//     return <div>App</div>;
//   }
// }

// export default App;
import React, { memo } from "react";
import CounterClass from "./CounterClass";
import CounterHook from "./CounterHook";

const App = memo(() => {
  return (
    <div>
      App
      <CounterClass></CounterClass>
      <hr />
      <CounterHook></CounterHook>
    </div>
  );
});

export default App;
