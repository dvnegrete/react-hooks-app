import { FormEvent } from "react"
import { TodoInterface } from "../interfaces/TodoInterface"
import { useForm } from "../hooks"



    export const TodoAdd = ( {onNewTodo}:any )=> {
    const { description, onInputChange, onResetForm } = useForm({
        description: '',
    });

    const onFormSubmit = (event:FormEvent)=> {
        event.preventDefault();
        if (description.length <= 1) return;

        const newTodo:TodoInterface = {
            id: new Date().getTime(),
            description: description,
            done: false
        };
        onNewTodo(newTodo);
        onResetForm();
    }

    return (
        <form onSubmit={ onFormSubmit }>
            <input 
                type="text"
                placeholder="¿Que hay que hacer?"
                className="form-control"
                name="description"
                value={ description}
                onChange={ onInputChange }
            />

            <button 
                type="submit"
                className="btn btn-outline-primary mt-2"
            >
                Agregar
            </button>

        </form>
    )
}