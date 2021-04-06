import { useState, useCallback } from 'react';
import ShowIncrement from './ShowIncrement';

const CallbackHook = () => {
  const [counter, setCounter] = useState(0);

  // const increment = () => {
  //   setCounter( counter + 1 );
  // };

  const increment = useCallback((number) => {
    setCounter(c => c + number);
  }, [ setCounter ]);

  return (
    <section>
      <h2 className="text-center text-center text-secondary">
        UseCallback Hook
      </h2>

      <p className="text-center font-weight-bold h3">
        Counter:&nbsp;
        <span className="text-primary">{ counter }</span>
      </p>

      <ShowIncrement increment={ increment } />
    </section>
  );
}

export default CallbackHook;