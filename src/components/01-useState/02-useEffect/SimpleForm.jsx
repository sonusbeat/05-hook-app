import { useState } from "react";
import Message from '../../../hooks/Message';

const SimpleForm = () => {

  const [formState, setFormState] = useState({
    name: "",
    email: ""
  });

  const { name, email } = formState;

  // useEffect(() => {
  //   console.log("¡ Efecto Realizado !");
  // }, []);

  // useEffect(() => {
  //   console.log("¡ formState Cambió !");
  // }, [ formState ]);

  // useEffect(() => {
  //   console.log("¡ email Cambió !");
  // }, [ email ]);

  const handleInputChange = ({ target }) => {
    setFormState({
      ...formState,
      [ target.name ]: target.value
    });
  };

  return (
    <section>
      <h2 className="text-center">useEffect</h2>

      <form>
        <div className="form-group">
          <label htmlFor="name">Nombre</label>

          <input
            id="name"
            name="name"
            type="text"
            className="form-control"
            autoComplete="off"
            value={ name }
            onChange={ handleInputChange }
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            className="form-control"
            autoComplete="off"
            value={ email }
            onChange={ handleInputChange }
          />
        </div>
      </form>

      { (name === "Daniel") && <Message /> }

    </section>
  );
};

export default SimpleForm;
