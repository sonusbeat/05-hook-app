import { mount } from 'enzyme';
import UserContext from '../../../components/10-useContext/UserContext';
import LoginScreen from '../../../components/10-useContext/LoginScreen';

describe('Pruebas en <LoginScreen />', () => {

  const setUser = jest.fn();

  const wrapper = mount(
    <UserContext.Provider value={{ setUser }}>
      <LoginScreen />
    </UserContext.Provider>
  );

  test('Deberia coincidir con el Snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('Debe de ejecutar el setUser con el argumento esperado', () => {
    wrapper.find("button").prop("onClick")();

    expect(setUser).toHaveBeenCalledWith({ id: 123, name: "Daniel" });
  });

});
