import useFetch from "../../hooks/useFetch";
import useCounter from '../../hooks/useCounter';

const MultipleCustomHooks = () => {
  const { counter, increment } = useCounter(1);

  const url = `https://www.breakingbadapi.com/api/quotes/${counter}`;

  const { loading, data } = useFetch(url);

  const { author, quote } = !!data && data[0];

  return (
    <section>
      <h2 className="text-center">Breaking Bad Quotes</h2>

      {
        loading ? (
          <div className="alert alert-info d-flex justify-content-around align-items-center mt-4">
            <strong>Loading...</strong>
            <div
              className="spinner-border text-info"
              role="status"
              aria-hidden="true"
            ></div>
          </div>
        ) : (
          <blockquote className="alert alert-secondary blockquote text-center mt-4">
            <p className="mb-0">{ quote }</p>
            <footer className="blockquote-footer">{ author }</footer>
          </blockquote>
        )
      }

      <div className="text-right">
        <button
          onClick={ increment }
          className="btn btn-secondary"
        >
          Siguiente quote
        </button>
      </div>
    </section>
  );
};

export default MultipleCustomHooks;
