import React, { useState, useRef } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const interval = useRef(null);

  const startCounter = () => {
    if (!isRunning) {
      setIsRunning(true);
      interval.current = setInterval(() => {
        setCount((prevState) => prevState + 1);
      }, 1000);
    }
  };

  const stopCounter = () => {
    clearInterval(interval.current);
    setIsRunning(false);
  };

  const resetCounter = () => {
    clearInterval(interval.current);
    setIsRunning(false);
    setCount(0);
  };
  return (
    <>
      <h1>Counter:{count}</h1>
      <button onClick={startCounter}>start</button>
      <button onClick={stopCounter}>stop</button>
      <button onClick={resetCounter}>reset</button>
    </>
  );
};

export default Counter;
