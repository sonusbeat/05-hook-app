import { useState } from "react";
import MultipleCustomHooks from '../03-examples/MultipleCustomHooks';

const RealExampleRef = () => {
  const [show, setShow] = useState(false);

  return (
    <section>
      <h2 className="text-center">Real Example Ref</h2>

      <hr />

      { show && <MultipleCustomHooks /> }

      <div className="form-group text-center mt-5">
        <button
          className="btn btn-primary"
          onClick={() => setShow(!show)}
        >Mostrar / Ocultar</button>
      </div>
    </section>
  );
};

export default RealExampleRef;
