import { useState, useEffect } from "react"
import { Message } from "./message";

export const SimpleForm = ()=> {
    const [ formState, setFormState ] = useState({
        username: 'strider',
        email: 'correo@mail.com'
    });

    const { username, email } = formState;

    const onInputChange = ({target}: any)=> {
        const {name, value} = target
        //console.log(name, value);
        setFormState({
            ...formState,
            [name]: value
        });
    }

    useEffect(()=> {
        // console.log("UseEffect called!");
    }, []);
    
    useEffect(()=> {
        // console.log("UseEffect formState!");
    }, [formState]);
    
    useEffect(()=> {
        // console.log("UseEffect EMAIL");
    }, [email]);

    return (
        <>
            <h1>Formulario Simple</h1>
            <hr />
            <input 
                type="text" 
                className="form-control"
                placeholder="Username"
                name="username"
                value={ username }
                onChange={ (event)=> onInputChange(event) }
            />

            {
                username === 'strider2' && <Message/>
            }
            <input 
                type="email" 
                className="form-control mt-2"
                placeholder="correo"
                name="email"
                value={ email }
                onChange={ (event)=> onInputChange(event) }
            />
        </>
    )
}