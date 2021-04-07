/*
  1. Se crea el estado inicial.
*/
const initialState = [{
  id: 1,
  todo: "Comprar soda",
  done: false
}];

/*
  2. Se crea la función de reducer.
*/
const todoReducer = ( state = initialState, action ) => {

  if(action?.type === "add") {
    return [ ...state, action.payload ];
  }

  return state;

};

/*
  3. Se almacena el reducer en una variable.
*/
let todos = todoReducer();

/*
  4. Se crea el nuevo estado a agregar.
*/
const newTodo = {
  id: 2,
  todo: "Comprar leche",
  done: false
};

/*
  5. Se crea el estado para ejecutar la acción.
*/
const addTodoAction = {
  type: "add",
  payload: newTodo
};

/*
  5. Se actualiza el estado llamando el reducer que al final
     va retornar el estado actualizado.
*/
todos = todoReducer( todos, addTodoAction );

/*
  6. Se muestra el estado en consola actualizado.
*/
console.log(todos);