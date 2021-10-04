import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { increment, decrement, incrementByAmount } from "./redux/counter";
import "./styles.css";

export default function App() {
  const { value } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>the count is : {value}</h1>
      <button onClick={() => dispatch(increment())}>increment</button>
      <button onClick={() => dispatch(decrement())}>decrement</button>
      <button onClick={() => dispatch(incrementByAmount(33))}>decrement</button>
    </div>
  );
}
