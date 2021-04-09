import { shallow } from 'enzyme';
import HookApp from '../HookApp';

describe("Puebas en <HookApp />", () => {
  test("Debe coincidir con el snapshot", () => {
    const wrapper = shallow(<HookApp />);

    expect(wrapper).toMatchSnapshot();
  });
});
