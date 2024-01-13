import { useRef } from "react"

export const FocusScreen = ()=> {
    const inputRef = useRef();

    const handlerClick = ()=>{
        inputRef.current.select()
        
    }
    

    return (
        <>
            <h1>Focus Screen</h1>
            <hr />

            <input 
                ref={ inputRef }
                type="text"
                className="form-control"
                placeholder="Ingrese su nombre"
            />

            <button 
                className="btn btn-secondary mt-3"
                onClick={ handlerClick }
            >
                Set Focus
            </button>

        </>
    )
}