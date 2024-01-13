import { useForm } from "../hooks/useForm";

export const FormWithCustomHook = ()=> {
    const {onInputChange, username, email, password, onResetForm } = useForm({
        username: '',
        email: '',
        password: '',
    });
   
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
         
            <input 
                type="email" 
                className="form-control mt-2"
                placeholder="correo"
                name="email"
                value={ email }
                onChange={ (event)=> onInputChange(event) }
            />

            <input 
                type="password" 
                className="form-control mt-2"
                placeholder="password"
                name="password"
                value={ password }
                onChange={ (event)=> onInputChange(event) }
            />

            <button 
                className="btn btn-primary mt-2"
                onClick={ onResetForm }
            >Reset</button>
        </>
    )
}