import { mount } from 'enzyme';

import HomeScreen from '../../../components/10-useContext/HomeScreen';
import UserContext from '../../../components/10-useContext/UserContext';

describe('Pruebas en <HomeScreen />', () => {
  const user = {
    name: "Daniel",
    email: "user@domain.com"
  };

  const wrapper = mount(
    <UserContext.Provider value={{ user }}>
      <HomeScreen/>
    </UserContext.Provider>
  );

  test('Deberia coincidir con el Snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

});
