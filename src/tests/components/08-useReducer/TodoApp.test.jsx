import TodoApp from '../../../components/09-use-reducer/TodoApp';
import { shallow, mount } from 'enzyme';
import demoTodos from '../../fixtures/demotTodos';
import { act } from '@testing-library/react';

describe("Pruebas en <TodoApp />", () => {

  const wrapper = shallow( <TodoApp /> );

  Storage.prototype.setItem = jest.fn(() => {});

  test('Debe de coincidir con el snapshot', () => {
    expect( wrapper ).toMatchSnapshot();
  });

  test('Debe de agregar dos TODO', () => {

    const wrapper = mount( <TodoApp />);

    act(() => {
      wrapper.find("TodoAdd").prop("HandleAddTodo")(demoTodos[0]);
      wrapper.find("TodoAdd").prop("HandleAddTodo")(demoTodos[1]);
    });

    expect(wrapper.find("h2").text().trim()).toBe("Todo App (2)");
    expect(localStorage.setItem).toHaveBeenCalledTimes(2);

  });

  test('Debe de eliminar un TODO', () => {

    wrapper.find("TodoAdd").prop("HandleAddTodo")( demoTodos[0] );
    wrapper.find("TodoList").prop("HandleDelete")( demoTodos[0].id );
    expect(wrapper.find("h2").text().trim()).toBe("Todo App (0)");

  });

});