import useCounter from '../../hooks/useCounter';
import Small from './Small';
import { useState } from 'react';

const Memorize = () => {
  const [show, setShow] = useState(false);

  const { counter, increment } = useCounter(10);


  const paragraph = {
    fontSize: "2.3rem",
    fontWeight: "bold",
    textAlign: "center"
  };

  let showHideClasses = "btn btn-";
  showHideClasses += show ? "primary" : "secondary";

  return (
    <section>
      <h2 className="text-center text-secondary">
        Memorize Hook
      </h2>

      <p style={ paragraph }>
        Counter:&nbsp;
        <Small value={ counter } />
      </p>

      <div className="form-group text-center">
        <button
          onClick={() => increment() }
          className="btn btn-secondary mr-2"
        >+1</button>

        <button
          onClick={ () => setShow(!show) }
          className={ showHideClasses }
        >
          { show ? "On" : "Off" }
          { " | " + JSON.stringify(show) }
        </button>
      </div>

    </section>
  );
}

export default Memorize;