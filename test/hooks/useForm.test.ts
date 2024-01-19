import { act, renderHook } from "@testing-library/react";
import { useForm } from "../../src/hooks";
import { ChangeEvent } from "react";

describe('Pruebas al hook useForm', () => {
    
    const initialForm = {
        name: 'Usuario de pruebas',
        email: 'mailDePrueba@mail.com'
    };

    test('should return defect for values', () => {
        const { result } = renderHook( ()=> useForm(initialForm) );
        //console.log(result.current);
        expect(result.current).toEqual({
            name: initialForm.name,
            email: initialForm.email,
            formState: initialForm,
            onInputChange: expect.any(Function),
            onResetForm: expect.any(Function)
          });
        
    });

    test('should change name of form', () => {
        const newValue ='Prueba de cambio de nombre';
        const inputChange = {
            target: { 
                name: 'name', 
                value: newValue,
            },
        } as ChangeEvent<HTMLInputElement>
        const { result } = renderHook( ()=> useForm(initialForm) );
        const { onInputChange } = result.current;
        act( ()=> {
            onInputChange(inputChange);
        });
        expect(result.current.name).toBe(newValue);
        expect(result.current.formState.name).toBe(newValue);
    });

    test('should has reset the form', () => {
        const newValue ='Prueba de cambio de nombre';
        const inputChange = {
            target: { 
                name: 'name', 
                value: newValue,
            },
        } as ChangeEvent<HTMLInputElement>
        const { result } = renderHook( ()=> useForm(initialForm) );
        const { onInputChange, onResetForm } = result.current;
        act( ()=> {
            onInputChange(inputChange);
            onResetForm();
        });
        expect(result.current.name).toBe(initialForm.name);
        expect(result.current.formState.name).toBe(initialForm.name);
    });

});