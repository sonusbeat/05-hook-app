import useForm from '../../hooks/useForm';

const TodoAdd = ({ HandleAddTodo }) => {
  const [{ description }, handleInputChange, reset] = useForm({ description: "" });

  const HandleSubmit = ( event ) => {
    event.preventDefault();

    // Validation
    if (description.trim().length <= 2) return;

    const newTodo = {
      id: new Date().getTime(),
      description: description,
      done: false
    };

    HandleAddTodo(newTodo);

    reset();
  };

  return (
    <div className="mb-5">
      <form onSubmit={ HandleSubmit }>
        <div className="form-group">
          <input
            name="description"
            type="text"
            className="form-control"
            autoComplete="off"
            onChange={ handleInputChange }
            value={ description }
          />
        </div>
        <button type="submit" className="btn btn-primary btn-block">
          Agregar
        </button>
      </form>
    </div>
  );
};

export default TodoAdd;
