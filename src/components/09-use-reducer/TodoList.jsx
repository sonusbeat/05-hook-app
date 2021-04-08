import TodoItem from "./TodoItem";
import PropTypes from 'prop-types';

const TodoList = ({ HandleToggle, HandleDelete, todos }) => {
  return (
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
          todos.map((todo, index ) => (
            <TodoItem
              key={ todo.id }
              HandleToggle={ HandleToggle }
              HandleDelete={ HandleDelete }
              todo={ todo }
              index={ index }
            />
          ))
        }
      </tbody>
    </table>
  );
};

export default TodoList;

TodoList.propTypes = {
  HandleToggle: PropTypes.func.isRequired,
  HandleDelete: PropTypes.func.isRequired,
  todos: PropTypes.array.isRequired,
};