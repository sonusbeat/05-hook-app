import { useState } from "react";

const useCounter = ( initialCounter = 10 ) => {
  const [counter, setCounter] = useState(initialCounter);

  const increment = () => {
    setCounter(counter + 1);
  };

  const decrement = () => {
    counter && setCounter(counter - 1);
  };

  const reset = () => {
    setCounter(initialCounter);
  };

  return {
    counter,
    increment,
    decrement,
    reset
  };
};

export default useCounter;
