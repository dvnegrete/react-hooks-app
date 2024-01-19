import { act, renderHook } from "@testing-library/react";
import { useCounter } from "./../../src/hooks";

describe('Pruebas en hook useCounter', () => {
    
    test('should return values for default', () => {
        const { result } = renderHook( ()=> useCounter() );
        const { counter, decrement, increment, reset } = result.current;
        expect(counter).toBe(10);
        expect(decrement).toEqual(expect.any(Function));
        expect(increment).toEqual(expect.any(Function));
        expect(reset).toEqual(expect.any(Function));
    });

    test('should generate value 100 in the counter', () => {
        const { result } = renderHook( ()=> useCounter(100));
        const { counter } = result.current;
        expect(counter).toBe(100);
    });

    test('should increment the counter', () => {
        const { result } = renderHook( ()=> useCounter(100));
        const { increment } = result.current;
        act( ()=> {
            increment();
            increment(2);
        });
        expect(result.current.counter).toBe(103);
        //expect(counter).toBe(101)
        //Si paso el counter, estoy pasando la referencia a un valor antiguo, y fallaria la prueba

    });
    
    test('should decrement the counter', () => {
        const { result } = renderHook( ()=> useCounter(50));
        const { decrement } = result.current;
        act( ()=> {
            decrement(5);
            decrement(2);
        });
        expect(result.current.counter).toBe(43);
    });
    
    test('should reset default value', () => {
        const { result } = renderHook( ()=> useCounter(1));
        const { decrement, increment, reset } = result.current;
        act( ()=> {
            increment(5);
            decrement(2);
            increment();
            reset();
        });
        expect(result.current.counter).toBe(1);
    });

});