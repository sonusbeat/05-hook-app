import { renderHook, act } from '@testing-library/react-hooks';
import useForm from '../../hooks/useForm';

describe("Pruebas en useForm", () => {

  const initialForm = {
    name: "Daniel",
    email: "user@domain.com"
  };

  test("Debe de regresar un formulario por defecto", () => {

    const { result } = renderHook( () => useForm(initialForm) );
    const [ formValues, handleInputChange, reset ] = result.current;

    expect( formValues ).toEqual( initialForm );
    expect( typeof handleInputChange ).toBe( "function" );
    expect( typeof reset ).toBe( "function" );


  });

  test("Debe de cambiar el valor del fomulario (cambiar nombre)", () => {

    const { result } = renderHook( () => useForm(initialForm) );
    const [ ,handleInputChange ] = result.current;

    act(() => {
      handleInputChange({
        target: {
          name: "name",
          value: "John"
        }
      });
    });

    const [ formValues ] = result.current;

    expect(formValues).toEqual( { ...initialForm, name: "John" } );

  });

  test("Debe de re-establecer el formulario con RESET", () => {

    const { result } = renderHook( () => useForm(initialForm) );
    const [ , handleInputChange, reset ] = result.current;

    act(() => {
      handleInputChange({
        target: {
          name: "name",
          value: "John"
        }
      });

      reset();
    });

    const [ formValues ] = result.current;

    expect(formValues).toEqual( initialForm );

  });

});