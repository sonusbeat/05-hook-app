const TodoReducer = (state = [], action) => {
  switch (action.type) {
    case "add":
      return [ ...state, action.payload ];

    // Método alternativo
    case "toggle-old":
      return state.map( todo => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            done: !todo.done
          };
        } else {
          return todo;
        }
      });

    case "toggle":
      return state.map( todo =>
        ( todo.id === action.payload )
          ? { ...todo, done: !todo.done }
          : todo
      );

    case "delete":
      return state.filter( todo => todo.id !== action.payload );

    default:
      return state;
  }
}

export default TodoReducer;