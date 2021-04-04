import { useEffect } from 'react';
import useForm from '../../hooks/useForm';

const FormWithCustomHook = () => {

  const [formValues, handleInputChange] = useForm({
    name:     "",
    email:    "",
    password: "",
  });

  const { name, email, password } = formValues;

  useEffect(() => {
    console.log("El email cambió a:", email);
  }, [ email ])

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formValues);
  };

  return (
    <section>
      <h2 className="text-center">Form With Custom Hook</h2>

      <form onSubmit={ handleSubmit }>
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

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            className="form-control"
            autoComplete="off"
            value={ password }
            onChange={ handleInputChange }
          />
        </div>

        <div className="form-group">
          <button
            id="submit"
            type="submit"
            className="btn btn-success btn-block"
          >Enviar</button>
        </div>
      </form>

    </section>
  );
};

export default FormWithCustomHook;
