import { useTodos } from "../hooks";

import { TodoList } from "./TodoList";
import { TodoAdd } from "./TodoAdd";

export const TodoApp = ()=> {
    const { 
        handlerNewTodo, 
        handlerToogleTodo, 
        handlerDeleteTodo, 
        todos,
        totalPending,
        todosCount
    } = useTodos();
    
    return (
        <>
            <h1>Total de Todos: { todosCount }, <small>pendientes: { totalPending }</small></h1>
            <hr />

            <div className="row">
                <div className="col-6">
                    <TodoList 
                        todos={todos} 
                        onDeleteTodo={ handlerDeleteTodo } 
                        onToogleTodo = { handlerToogleTodo }
                    />
                </div>

                <div className="col-6">
                    <h4>Agregar TODO</h4>
                    <hr />
                    <TodoAdd onNewTodo={ handlerNewTodo }/>
                </div>
            </div>

        </>
    )
}