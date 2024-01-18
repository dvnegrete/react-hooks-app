import { Action } from "../interfaces/Action";

const initialState = [{
    id: 1,
    todo: 'Recolectar primera roca',
    done: 'false',
}];

const todoReducer = (state = initialState, action:Action)=> {

    if (action.type === '[TODO] add todo') {
        return [ ...state, action.payload ];
    }
    return state
}

//let todos = todoReducer();
const newTodo = {
    id: 2,
    todo: 'Recolectar segunda roca',
    done: 'false',
}
const addTodoAction:Action = {
    type: '[TODO] add todo',
    payload: newTodo
}

let todos = todoReducer(initialState, addTodoAction);

console.log({state:todos});