import PropTypes from 'prop-types';

const TodoItem = ({ HandleToggle, HandleDelete, todo, index }) => {
  return (
    <tr>
      <td>
        <p
          className={todo.done ? "description completed" : "description"}
          onClick={() => HandleToggle(todo.id)}
        >
          { `${index + 1}. ${todo.description}` }
        </p>
      </td>
      <td className="text-center">{todo.done ? "Yes" : "No"}</td>
      <td className="text-center">
        <button
          className="btn btn-danger btn-sm"
          onClick={() => HandleDelete(todo.id)}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default TodoItem;

TodoItem.propTypes = {
  HandleToggle: PropTypes.func.isRequired,
  HandleDelete: PropTypes.func.isRequired,
  todo: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired
};