import TodoItem from '../../../components/09-use-reducer/TodoItem';
import { shallow } from 'enzyme';
import demoTodos from '../../fixtures/demotTodos';

describe('Pruebas en el component <TodoItem />', () => {

  const HandleToggle = jest.fn();
  const HandleDelete = jest.fn();

  const wrapper = shallow(
    <TodoItem
      HandleToggle={ HandleToggle }
      HandleDelete={ HandleDelete }
      todo={ demoTodos[0] }
      index={ 0 }
    />
  );

  test('Deberia coincidir con el Snapshot', () => {

    expect( wrapper ).toMatchSnapshot();

  });

  test('Debe de llamar la función toggle', () => {

    wrapper.find(".description").simulate("click");
    expect( HandleToggle ).toHaveBeenCalledWith(demoTodos[0].id);

  });

  test('Debe de llamar la función borrar', () => {

    wrapper.find(".btn-danger").simulate("click");
    expect( HandleDelete ).toHaveBeenCalledWith(demoTodos[0].id);

  });

  test('Debe de mostrar el texto correctamente', () => {

    const paragraph = wrapper.find(".description");
    expect( paragraph.text().trim() ).toBe(`1. ${demoTodos[0].description}`);

  });

  test('Debe de tener la clase complete si el TODO.done === true', () => {

    const todo = demoTodos[0];
    todo.done = true;

    const wrapper = shallow(
      <TodoItem
        HandleToggle={ HandleToggle }
        HandleDelete={ HandleDelete }
        todo={ todo }
        index={ 0 }
      />
    );

    expect(wrapper.find(".description").hasClass("completed")).toBe(true);
  });

});
