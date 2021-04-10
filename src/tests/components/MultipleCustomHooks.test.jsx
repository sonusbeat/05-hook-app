import React from "react";
import { shallow } from 'enzyme';
import MultipleCustomHooks from '../../components/03-examples/MultipleCustomHooks';
import useFetch from '../../hooks/useFetch';
import useCounter from '../../hooks/useCounter';

jest.mock('../../hooks/useFetch');
jest.mock('../../hooks/useCounter');

describe('Puebas en <MultipleCustomHooks />', () => {

  beforeEach(() => {
    useCounter.mockReturnValue({
      counter: 1,
      increment: () => {}
    });
  });

  test('Debe coincidir con el Snapshot', () => {

    useFetch.mockReturnValue({
      data: null,
      loading: true,
      error: null
    });

    const wrapper = shallow( <MultipleCustomHooks /> );
    expect( wrapper ).toMatchSnapshot();

  });

  test('Debe mostrar la información', () => {

    const author = "Daniel";
    const quote = "Si programar es divertido entonces no programar es aburrido";

    useFetch.mockReturnValue({
      data: [{ author, quote }],
      loading: false,
      error: null
    });

    const wrapper = shallow( <MultipleCustomHooks /> );

    expect( wrapper.find(".alert-info").exists() ).toBe( false );
    expect( wrapper.find(".mb-0").text().trim() ).toBe( quote );
    expect( wrapper.find("footer").text().trim() ).toBe( author );

  });

});
