import { useReducer } from "react";
import TodoReducer from './todoReducer';
import "./TodoApp.css"

const initialState = [{
  id: new Date().getTime(),
  description: "Learn React",
  done: false
}];

const TodoApp = () => {

  const [ todos ] = useReducer(TodoReducer, initialState);

  console.log(todos);

  return (
    <section>
      <h2 className="text-center mb-4">Todo App <small>({ todos.length })</small></h2>

      <div className="mb-5">
        <form>
          <div className="form-group">
            <input
              name="description"
              type="text"
              className="form-control"
              autoComplete="off"
            />
          </div>
        </form>
      </div>

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
                  <p className="description">{ `${i + 1}. ${todo.description}` }</p>
                </td>
                <td className="text-center">{ todo.done ? "Yes" : "No" }</td>
                <td className="text-center">
                  <button className="btn btn-danger btn-sm">Delete</button>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </section>
  );
}

export default TodoApp;