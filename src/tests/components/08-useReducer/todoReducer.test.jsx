import TodoReducer from '../../../components/09-use-reducer/todoReducer';
import demoTodos from '../../fixtures/demotTodos';

describe('Pruebas en TodoReducer', () => {

  test('Debe de retornar el estado por defecto', () => {
    const state = TodoReducer(demoTodos, {});

    expect( state ).toEqual( demoTodos );
  });

  test('Debe de agregar un Todo', () => {
    const newTodo = {
      id: 3,
      desc: "Aprender MongoDB",
      done: false
    };

    const action = {
      type: "add",
      payload: newTodo
    };

    const state = TodoReducer( demoTodos, action);

    // Evalua la cantidad de elementos del arreglo
    // expect( state.length ).toEqual( 3 );

    // Evalua el estado que nos devuelve con los fixtures
    // y el nuevo Todo
    expect( state ).toEqual( [ ...demoTodos, newTodo ] );
  });

  test('Debe actualizar el estado del Todo', () => {
    const action = {
      type: "toggle",
      payload: 1
    };

    const state = TodoReducer( demoTodos, action);

    expect( state[0].done ).toBe( true );
    expect( state[1] ).toEqual( demoTodos[1] );

  });

  test('Debe eliminar un Todo', () => {

    const action = {
      type: "delete",
      payload: 2
    };

    const state = TodoReducer( demoTodos, action );

    expect( state.length ).toBe( 1 );
    expect( state ).toEqual( [ demoTodos[0] ] );

  });


});
