import React, { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const increase = () => {
    setCounter(counter + 1);
  };

  const decrease = () => {
    setCounter(counter - 1);
  };

  return (
    <>
      <div>{counter}</div>
      <div>
        <button onClick={increase}>Increase</button>
      </div>
      <div>
        <button onClick={decrease}>Decrease</button>
      </div>
    </>
  );
};

export default Counter;
