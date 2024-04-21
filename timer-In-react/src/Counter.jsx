import React, { useEffect, useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [intervalId, setIntervalId] = useState(null);

  const handleStart = () => {
    setIntervalId(
      setInterval(() => {
        setCount((prev) => prev + 1);
      }, 1000)
    );
  };
  const handleStop = () => {
    clearInterval(intervalId);
  };

  useEffect(() => {
    return () => clearInterval(intervalId);
  }, [intervalId]);

  return (
    <>
      <div>Counter:{count}</div>
      <button onClick={handleStart}>start</button>
      <button onClick={handleStop}>stop</button>
    </>
  );
};

export default Counter;

/* using ref

import React, { useRef, useState } from "react";

function Counter() {
  const [Count, setCount] = useState(0);
  const ref = useRef(null);
  const handleStart = () => {
    if (!ref.current) {
      ref.current = setInterval(() => {
        setCount((prev) => prev + 1);
      }, 1000);
    }
  };

  const handleStop = () => {
    clearInterval(ref.current);
    ref.current=null;
  };

  return (
    <>
      <div>Counter:{Count}</div>
      <button onClick={handleStart}>start</button>
      <button onClick={handleStop}>stop</button>
    </>
  );
}

export default Counter;
*/
