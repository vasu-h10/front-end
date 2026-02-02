import { useState } from "react";
import { isEven } from "./utils";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Count: {count}</h2>

      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>

      <p>{isEven(count) ? "Even Number" : "Odd Number"}</p>
    </div>
  );
}

export default Counter;
