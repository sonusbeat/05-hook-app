import { shallow } from 'enzyme';
import TodoList from "../../../components/09-use-reducer/TodoList";
import demoTodos from '../../fixtures/demotTodos';

describe('Pruebas en <TodoList />', () => {
  const HandleToggle = jest.fn();
  const HandleDelete = jest.fn();

  const wrapper = shallow(
    <TodoList
      HandleToggle={ HandleToggle }
      HandleDelete={ HandleDelete }
      todos={ demoTodos }
    />
  );

  test('Deberia coincidir con el snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test(`Debe de tener ${demoTodos.length} items`, () => {
    expect(wrapper.find("TodoItem").length).toBe(demoTodos.length);
  });

  test("Su propiedad HandleToggle debe ser enviada como una función", () => {
    expect( wrapper.find("TodoItem").at(0).prop("HandleToggle") )
      .toEqual( expect.any(Function) );
  });

  test("Su propiedad HandleDelete debe ser enviada como una función", () => {
    expect( wrapper.find("TodoItem").at(0).prop("HandleDelete") )
      .toEqual( expect.any(Function) );
  });

});