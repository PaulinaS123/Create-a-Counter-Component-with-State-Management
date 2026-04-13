import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDelayedIncrement = () => {
    setTimeout(() => {
      setCount((prev) => prev + 1);
    }, 2000);
  };

  const handleIncrementTwice = () => {
    setCount(count + 1);
    setCount(count + 1); // batching issue
  };

  const handleCorrectIncrementTwice = () => {
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Counter: {count}</h1>

      <button onClick={handleIncrement}>Increment</button>
      <br />
      <br />

      <button onClick={handleDelayedIncrement}>Increment After Delay</button>
      <br />
      <br />

      <button onClick={handleIncrementTwice}>Increment Twice (Wrong)</button>
      <br />
      <br />

      <button onClick={handleCorrectIncrementTwice}>
        Increment Twice (Correct)
      </button>
    </div>
  );
}
