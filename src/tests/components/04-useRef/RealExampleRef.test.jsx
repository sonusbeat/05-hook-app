import RealExampleRef from '../../../components/04-useRef/RealExampleRef';
import { shallow } from 'enzyme';

describe('Pruebas en <RealExampleRef />', () => {

  const wrapper = shallow(<RealExampleRef />);

  test('Debería de mostrarse correctamente', () => {

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find("MultipleCustomHooks").exists()).toBe(false);

  });

  test('Debe de mostrar el componente <MultipleCustomHooks />', () => {

    wrapper.find("#toggle").simulate("click");
    expect(wrapper.find("MultipleCustomHooks").exists()).toBe(true);

  });

});
