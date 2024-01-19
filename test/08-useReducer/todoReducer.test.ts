import { Action } from '../../src/interfaces/Action';
import { todoReducer } from './../../src/08-useReducer/todoReducer';

describe('test in todoReducer', () => {

    const initialState = [{
        id: 1,
        description: 'Demo Todo',
        done: false,
    }]

    test('should return initial state', () => {
       const newState = todoReducer(initialState, { payload: '', type: '' });
       expect(newState).toBe(initialState);
        

    });
    
    test('should add todo', () => {
        const action:Action = {
            type: '[TODO] New Todo',
            payload: {
                id: 3,
                description: 'New Todo number 2',
                done: false,
            }
        };
       const newState = todoReducer(initialState, action);
       expect(newState.length).toBe(2);
       expect(newState).toContain(action.payload);
    });
    
    test('should delete todo', () => {
        const action:Action = {
            type: '[TODO] Remove Todo',
            payload: 1
        };        
       const newState = todoReducer(initialState, action);
       expect(newState.length).toBe(0);
    });
    
    test('should toogle todo', () => {
        const action:Action = {
            type: '[TODO] Toogle Todo',
            payload: 1
        };        
       const newState = todoReducer(initialState, action);
       expect(newState[0].done).toBeTruthy();

       const newState2 = todoReducer(newState, action);
       expect(newState2[0].done).toBeFalsy();
    });
    
});