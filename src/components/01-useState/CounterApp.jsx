import { useState } from "react";

const CounterApp = () => {

  const [state, setState] = useState({
    counter1: 10,
    counter2: 20,
    counter3: 30,
    counter4: 40,
  });

  const { counter1, counter2 } = state;

  const IncrementCounter = () => {
    setState({ ...state, counter1: counter1 + 1 });
  };

  const DecrementCounter = () => {
    counter1 && setState({ ...state, counter1: counter1 - 1 });
  };

  return (
    <section>
      <h2>
        Counter 1:&nbsp;
        <span className="text-primary">{ counter1 }</span>
      </h2>

      <button
        className="btn btn-dark"
        onClick={ IncrementCounter }
      >+</button>&nbsp;

      <button
        className="btn btn-dark"
        onClick={ DecrementCounter }
      >-</button>

      <hr/>

      <h2>
        Counter 2:&nbsp;
        <span className="text-primary">{ counter2 }</span>
      </h2>
    </section>
  )
};

export default CounterApp;
