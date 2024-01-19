import { TodoInterface } from "../interfaces/TodoInterface"

export const TodoItem = ( 
        { 
            todo, 
            onDeleteTodo, 
            onToogleTodo 
        } : {
            todo:TodoInterface, 
            onToogleTodo: React.FC, 
            onDeleteTodo: React.FC
        } 
    )=> {
    return (
        <>
            <li className="list-group-item d-flex justify-content-between">
                <span 
                    className={`align-self-center todoLi${ todo.done ? ' text-decoration-line-through' : ''}`}
                    onClick={ ()=> onToogleTodo(todo.id)}
                    aria-label="span"
                >
                    { todo.description }
                </span>
                <button className="btn btn-danger"
                    onClick={ ()=> onDeleteTodo(todo.id)}
                >Borrar</button>
            </li>
        </>
    )
}