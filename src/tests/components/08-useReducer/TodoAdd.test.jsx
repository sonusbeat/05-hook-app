import TodoAdd from '../../../components/09-use-reducer/TodoAdd';
import { shallow } from 'enzyme';
// import demoTodos from '../../fixtures/demotTodos';

describe('Pruebas en <TodoAdd />', () => {

  const HandleAddTodo = jest.fn();

  const wrapper = shallow(
    <TodoAdd
      HandleAddTodo={ HandleAddTodo }
    />
  );

  test("Debe de coincidir con el snapshot", () => {
    expect( wrapper ).toMatchSnapshot();
  });

  test("No debe de llamar HandleAddTodo", () => {
    const formSubmit = wrapper.find("form").prop("onSubmit");

    formSubmit({ preventDefault(){} });

    expect( HandleAddTodo ).toHaveBeenCalledTimes(0);
  });

  test("Debe de llamar la función HandleAddTodo", () => {
    const value = "Learn React";

    wrapper.find("input").simulate("change", {
      target: {
        value,
        name: "description"
      }
    });

    const formSubmit = wrapper.find("form").prop("onSubmit");

    formSubmit({ preventDefault(){} });

    expect( HandleAddTodo ).toHaveBeenCalledTimes(1);
    expect( HandleAddTodo ).toHaveBeenCalledWith( expect.any(Object) );
    expect( HandleAddTodo ).toHaveBeenCalledWith({
      id: expect.any(Number),
      description: value,
      done: false,
    });

    expect(wrapper.find("input").prop("value")).toBe("");

  });


});
