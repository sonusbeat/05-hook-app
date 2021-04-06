import { useMemo, useState } from 'react';
import useCounter from '../../hooks/useCounter';
import hardProcess from '../../helpers/hardProcess';

const MemoHook = () => {
  const { counter, increment } = useCounter(100);
  const [show, setShow] = useState(false);

  const memoHardProcess = useMemo(() => hardProcess(counter), [ counter ]);

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
        Memo Hook
      </h2>

      <p style={ paragraph }>
        Counter:&nbsp;
        <span className="text-primary">{ counter }</span>
      </p>

      <p className="text-danger text-center">
        { memoHardProcess }
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

export default MemoHook;