import { fireEvent, render, screen } from '@testing-library/react';
import { MultipleCustomHooks } from './../../src/03-examples/MultipleCustomHooks';

jest.mock('../../src/hooks/useFetch', () => ({  
    data: Array,
    isLoading: Boolean,
    handlerError: null,
}));
jest.mock('../../src/hooks/useCounter', () => ({
    useCounter: jest.fn(), // Aquí mockeamos la función useCounter
}));

describe('test in Component <MultipleCustomHooks/>', () => {
    
    const { useFetch: useFetchMock } = require('../../src/hooks/useFetch');

    const mockIncrement = jest.fn();
    const { useCounter: useCounterMock } = require('../../src/hooks/useCounter');
    useCounterMock.mockReturnValue({
        counter: 1,
        increment: mockIncrement
    });

    beforeEach(()=>{
        jest.clearAllMocks();
        //sirve para limpiar cada una de las pruebas
    });

    
    test('should show the default component', () => {
        useFetchMock.mockReturnValue({  
            data: null,
            isLoading: true,
            handlerError: null,
        });        
        render(<MultipleCustomHooks/>)
        //screen.debug();
        expect(screen.getByText('Cargando...')).toBeTruthy();
        expect(screen.getByText('BreakingBad Quotes')).toBeTruthy();

        const nextButton:HTMLButtonElement = screen.getByRole('button', {name: 'Next Quote'});
        expect(nextButton.disabled).toBeTruthy();

    });
   
    xtest('should show the default component', () => {
        useFetchMock.mockReturnValue({  
            data: [{author: 'Damian', quote: 'Hola mundo JEST'}],
            isLoading: false,
            handlerError: null,
        });
        
        render(<MultipleCustomHooks/>)
        expect(screen.getByText('Hola Mundo JEST')).toBeTruthy();
        expect(screen.getByText('Damian')).toBeTruthy();

        const nextButton:HTMLButtonElement = screen.getByRole('button', {name: 'Next Quote'});
        expect(nextButton.disabled).toBeFalsy();

    });

    xtest('should call the increment function', () => {        

        useFetchMock.mockReturnValue({  
            data: [{author: 'Damian', quote: 'Hola mundo JEST'}],
            isLoading: false,
            handlerError: null,
        });
        
        render(<MultipleCustomHooks/>)
        const nextButton:HTMLButtonElement = screen.getByRole('button', {name: 'Next Quote'});
        fireEvent.click(nextButton);
        expect(mockIncrement).toHaveBeenCalled();

    });
    
});