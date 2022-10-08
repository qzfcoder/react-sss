import React, { memo, useState, useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "incerment":
      return { ...state, counter: state.counter + 1 };
    case "decerment":
      return { ...state, counter: state.counter - 1 };
    case "add_number":
      return { ...state, counter: state.counter + action.num };
    case "sub_number":
      return { ...state, counter: state.counter - action.num };
    default:
      return state;
  }
}

const App = memo(() => {
  // const [counter, setCounter] = useState(0);
  const [state, dispatch] = useReducer(reducer, { counter: 0 });

  return (
    <div>
      App
      <h2>当前计数: {state.counter}</h2>
      <button onClick={(e) => dispatch({ type: "incerment" })}>+1</button>
      <button onClick={(e) => dispatch({ type: "decerment" })}>-1</button>
      <button onClick={(e) => dispatch({ type: "add_number", num: 5 })}>
        +5
      </button>
      <button onClick={(e) => dispatch({ type: "add_number", num: 10 })}>
        +10
      </button>
      <button onClick={(e) => dispatch({ type: "sub_number", num: 10 })}>
        -10
      </button>
      {/*<h2>当前计数: {counter}</h2>
      <button onClick={(e) => setCounter(counter + 1)}>+1</button>
      <button onClick={(e) => setCounter(counter - 1)}>-1</button>
      <button onClick={(e) => setCounter(counter + 5)}>+5</button>
      <button onClick={(e) => setCounter(counter + 10)}>+10</button>
      <button onClick={(e) => setCounter(counter - 10)}>-10</button> */}
    </div>
  );
});

export default App;
