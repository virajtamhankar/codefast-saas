import { useState } from "react";

export const Example = () => {
  const [counter, setCounter] = useState(0);
  const incrementCounter = () => setCounter(counter + 1);
  const decrementCounter = () => setCounter(counter - 1);

  return (
    <div className="flex items-center">
      <button className="btn" onClick={decrementCounter}>
        Remove
      </button>
      <div>{counter}</div>
      <button className="btn" onClick={incrementCounter}>
        Add
      </button>
    </div>
  );
};
