import { useState } from "react";
import useLocalStorage from "./components/UseLocalStorage";

function App() {
  const { count, setCount } = useLocalStorage("Counter", 0);

  return (
    <>
      <h2>Count: {count}</h2>

      <button onClick={() => setCount(count + 1)}>Increment</button>

      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <br />
      <button onClick={() => setCount(0)}>Reset</button>
    </>
  );
}

export default App;
