import { useEffect, useReducer } from "react"
import { TodoInterface } from "../interfaces/TodoInterface";
import { Action } from "../interfaces/Action";
import { todoReducer } from "../08-useReducer/todoReducer";

const initialState:TodoInterface[] = [];

const init = () =>{
    const data = localStorage.getItem('todosApp');
    return data ? JSON.parse(data) : null;
}

export const useTodos = ( ) => {

    const [todos, dispatch] = useReducer(todoReducer, initialState, init);

    useEffect(()=>{
        localStorage.setItem('todosApp', JSON.stringify(todos))
    }, [todos])


    const handlerNewTodo = (todo: TodoInterface)=>{
        const action:Action = {
            type: '[TODO] New Todo',
            payload: todo,
        };
        dispatch(action);
    }

    const handlerDeleteTodo = (id:number) =>{
        const action:Action = {
            type: '[TODO] Remove Todo',
            payload: id,
        };
        dispatch(action);
    }
 
    const handlerToogleTodo = (id:number) =>{
        const action:Action = {
            type: '[TODO] Toogle Todo',
            payload: id,
        };
        dispatch(action);
    }

    // const totalPending = ():number=> {
    //     return todos.filter( (todo:TodoInterface) => !todo.done).length;
    // }

    // const todosCount = () :number => {
    //     return todos.length;
    // }
        
    return {
        handlerNewTodo,
        handlerDeleteTodo,
        handlerToogleTodo,
        todos,
        totalPending: todos.filter( (todo:TodoInterface) => !todo.done).length,
        todosCount: todos.length,
    }
}