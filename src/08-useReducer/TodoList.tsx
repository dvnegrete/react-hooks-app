import React from "react"
import { TodoInterface } from "../interfaces/TodoInterface"
import { TodoItem } from "./TodoItem"

export const TodoList = ( 
        { 
            todos = [], 
            onDeleteTodo, 
            onToogleTodo
        } : { 
            todos:TodoInterface[], 
            onToogleTodo: React.FC, 
            onDeleteTodo: React.FC 
        }
    )=> {
    return (
        <ul className="list-group">
            { 
                todos.map( (todo:TodoInterface) => (
                    <TodoItem 
                        key={todo.id} 
                        todo={todo} 
                        onDeleteTodo={ (id:number)=> onDeleteTodo(id) }
                        onToogleTodo= { (id:number)=> onToogleTodo(id) }
                    />
                ) )
            }
        </ul>
    )
}