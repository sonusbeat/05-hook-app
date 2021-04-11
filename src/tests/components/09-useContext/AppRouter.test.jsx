import { mount } from 'enzyme';
import AppRouter from '../../../components/10-useContext/AppRouter';
import UserContext from '../../../components/10-useContext/UserContext';

describe('Pruebas en <AppRouter />', () => {
  const user = {
    id: 1,
    name: "Daniel",
    email: "user@domain.com"
  };

  const wrapper = mount(
    <UserContext.Provider value={{ user }}>
      <AppRouter />
    </UserContext.Provider>
  );

  test('Deberia coincidir con el Snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

});
