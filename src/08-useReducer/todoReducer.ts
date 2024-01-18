import { Action } from "../interfaces/Action";
import { TodoInterface } from "../interfaces/TodoInterface";

export const todoReducer = (initialState:any, action: Action) => {
    switch (action.type) {
        case '[TODO] New Todo':
            return [
                ...initialState, 
                action.payload
            ];
        case '[TODO] Remove Todo':
            return initialState.filter( (todo:TodoInterface) => todo.id !== action.payload);
        case '[TODO] Toogle Todo':
            return initialState.map( (todo:TodoInterface) => {
                if (todo.id === action.payload) {
                    return {
                        ...todo,
                        done: !todo.done
                    }
                }
                return todo;
            });
        // case '[TODO] Edit Todo':
        //     return [
        //         ...initialState, 
        //         action.payload
        //     ];
        default:
            return initialState;
    }
}