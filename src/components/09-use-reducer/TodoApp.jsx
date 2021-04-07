import { useReducer, useEffect } from "react";
import TodoReducer from './todoReducer';
import "./TodoApp.css"
import useForm from '../../hooks/useForm';

const init = () => {
  return JSON.parse(localStorage.getItem("todos")) || [];
};

const TodoApp = () => {

  const [ todos, dispatch ] = useReducer(TodoReducer, [], init);

  const [{ description }, handleInputChange, reset] = useForm({ description: "" });

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify( todos ));
  }, [ todos ]);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (description.trim().length <= 2) return;

    const newTodo = {
      id: new Date().getTime(),
      description: description,
      done: false
    };

    const todoAction = {
      type: "add",
      payload: newTodo
    }

    dispatch(todoAction);
    reset();
  };

  const HandleDelete = (todoId) => {
    const todoAction = {
      type: "delete",
      payload: todoId
    };

    dispatch(todoAction);
  };

  const HandleToggle = (todoId) => {
    dispatch({
      type: "toggle",
      payload: todoId
    });
  };

  return (
    <section>
      <h2 className="text-center mb-4">Todo App <small>({ todos.length })</small></h2>

      <div className="mb-5">
        <form onSubmit={ handleSubmit }>
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
          <button
            type="submit"
            className="btn btn-primary btn-block"
          >Agregar</button>
        </form>
      </div>

      {
        todos.length ?
          <table className="table">
            <thead>
              <tr>
                <th>Task</th>
                <th className="text-center">Done</th>
                <th className="text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {
                todos.map((todo, i) => (
                  <tr key={todo.id}>
                    <td>
                      <p
                        className={ todo.done ? "description completed" : "description" }
                        onClick={ () => HandleToggle(todo.id) }
                      >
                        { `${i + 1}. ${todo.description}` }
                      </p>
                    </td>
                    <td className="text-center">{ todo.done ? "Yes" : "No" }</td>
                    <td className="text-center">
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={ () => HandleDelete(todo.id) }
                      >Delete</button>
                    </td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        :
        <div className="alert alert-warning text-center">
          <strong>Aún no hay tareas creadas</strong>
        </div>
      }
    </section>
  );
}

export default TodoApp;