"use client";
import { useState } from "react";

function Counter({ users }) {
  console.log("counter", users);

  const [counter, setCounter] = useState(0);
  return (
    <div>
      <p>They are {users.length} users</p>
      <button onClick={() => setCounter((c) => c + 1)}>+</button>
      <p>{counter}</p>
      <button onClick={() => setCounter((c) => c - 1)} disabled={counter === 0}>
        -
      </button>
    </div>
  );
}

export default Counter;
