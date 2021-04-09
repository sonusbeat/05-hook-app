import { renderHook, act } from '@testing-library/react-hooks';
import useCounter from '../../hooks/useCounter';

describe("Pruebas en useCounter Hook", () => {
  test("Debe de retornar valores por defecto", () => {

    const { result } = renderHook( () => useCounter() );

    expect( result.current.counter ).toBe(10);
    expect( typeof result.current.increment ).toBe("function");
    expect( typeof result.current.decrement ).toBe("function");
    expect( typeof result.current.reset ).toBe("function");

  });

  test("Debe de tener el counter en 100", () => {

    const counter = 100;
    const { result } = renderHook( () => useCounter(counter) );

    expect(result.current.counter).toBe(counter);

  });

  test("Debe de incrementar el counter por 1", () => {

    const initialState = 100;
    const { result } = renderHook( () => useCounter(initialState) );
    const { increment } = result.current;

    act(() => increment());

    const { counter } = result.current;

    expect( counter ).toBe(101);

  });

  test("Debe de disminuir el counter por 1", () => {

    const initialState = 100;
    const { result } = renderHook( () => useCounter(initialState) );
    const { decrement } = result.current;

    act(() => decrement());

    const { counter } = result.current;

    expect( counter ).toBe(99);

  });

  test("Debe de hacer reset al valor por defecto", () => {

    const initialState = 100;
    const { result } = renderHook( () => useCounter(initialState) );
    const { increment, reset } = result.current;

    act(() => {

      increment();
      reset();

    });

    const { counter } = result.current;

    expect( counter ).toBe(100);

  });
})