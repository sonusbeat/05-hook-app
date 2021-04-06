import { useLayoutEffect, useRef, useState } from "react";
import useFetch from "../../hooks/useFetch";
import useCounter from '../../hooks/useCounter';
import "./Layout.css";

const Layout = () => {
  const { counter, increment } = useCounter(1);
  const { data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
  const [boxSize, setBoxSize] = useState({});

  const { quote } = !!data && data[0];

  const paragraph = useRef();

  useLayoutEffect(() => {
    setBoxSize(paragraph.current.getBoundingClientRect());
  }, [ quote ]);

  return (
    <section>
      <h3 className="text-center">Layout Effect</h3>

      <blockquote className="alert alert-secondary blockquote text-center mt-4">
        <p ref={ paragraph } className="mb-0">{ quote }</p>
      </blockquote>

      <pre>
        { JSON.stringify(boxSize, null, 3) }
      </pre>

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

export default Layout;
