import { useReducer } from "react";
import TodoReducer from './todoReducer';

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
      <h2>Todo App</h2>

      <ol>
        {
          todos.map(todo => (<li key={todo.id}>{ todo.description }</li>))
        }
      </ol>
    </section>
  );
}

export default TodoApp;