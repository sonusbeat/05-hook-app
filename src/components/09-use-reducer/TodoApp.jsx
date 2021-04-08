import { useReducer, useEffect } from "react";
import TodoReducer from './todoReducer';
import "./TodoApp.css"
import TodoAdd from "./TodoAdd";
import TodoList from "./TodoList";

const init = () => {
  return JSON.parse(localStorage.getItem("todos")) || [];
};

const TodoApp = () => {

  const [ todos, dispatch ] = useReducer(TodoReducer, [], init);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify( todos ));
  }, [ todos ]);

  const HandleAddTodo = ( newTodo ) => {
    dispatch({
      type: "add",
      payload: newTodo
    });
  };

  const HandleToggle = ( todoId ) => {
    dispatch({
      type: "toggle",
      payload: todoId
    });
  };

  const HandleDelete = ( todoId ) => {
    dispatch({
      type: "delete",
      payload: todoId
    });
  };

  return (
    <section>
      <h2 className="text-center mb-4">
        Todo App <small>({ todos.length })</small>
      </h2>

      <TodoAdd HandleAddTodo={ HandleAddTodo } />

      {
        todos.length
          ? <TodoList
              HandleToggle={ HandleToggle }
              HandleDelete={ HandleDelete }
              todos={ todos }
            />
          : <div className="alert alert-warning text-center">
              <strong>Aún no hay tareas creadas</strong>
            </div>
      }
    </section>
  );
}

export default TodoApp;