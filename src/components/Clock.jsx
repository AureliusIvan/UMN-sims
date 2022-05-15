import React, { useState, useEffect, useRef } from "react";

function Counter() {
  const [Day, setDay] = useState(0);
  const [hour, setHour] = useState(23);
  const [minute, setCount] = useState(0);
  useInterval(() => {
    setCount(minute + 1);
    if(minute >= 59){
        setHour(hour + 1);
        setCount(0);
    }
    if(hour >= 23 && minute === 59){
        setDay(Day+1);
        setHour(0);
    }
  }, 1000);

  return <h1>{Day}:{hour}:{minute}</h1>;
}

function useInterval(callback, delay) {
  const savedCallback = useRef();

  // Remember the latest function.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

export default Counter;