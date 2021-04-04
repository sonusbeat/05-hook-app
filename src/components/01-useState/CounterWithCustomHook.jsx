import useCounter from '../../hooks/useCounter';

const CounterWithCustomHook = () => {

  const { state, increment, decrement, reset } = useCounter( 100 );

  return (
    <section>
      <h2 className="text-center">
        Counter con un Hook: <span className="text-primary">{ state }</span>
      </h2>

      <div className="text-center">
        <button
          onClick={ () => increment(10) }
          className="btn btn-dark"
          style={{ width: "40px" }}
        >+</button>&nbsp;

        <button
          onClick={ () => decrement(10) }
          style={{ width: "40px" }}
          className="btn btn-dark"
          disabled={ state === 0 ? true : false }
        >-</button>&nbsp;

        <button
          onClick={ reset }
          className="btn btn-warning"
        >Reset</button>
      </div>
    </section>
  );
};

export default CounterWithCustomHook;
