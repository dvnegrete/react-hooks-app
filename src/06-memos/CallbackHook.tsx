import { useCallback, useState } from "react";
import { ShowIncrement } from "./ShowIncrement";

export const CallbackHook = ()=> {
    const [ counter, setCounter ] = useState(0);
    
    const fnIncrement = useCallback( (value:any) => {
        console.log("EN EL fnIncrement");
        
        setCounter( valueLocal => valueLocal + value )
    }, [])

    // const fnIncrement = ()=> {
    //     setCounter( counter + 1 );
    // }
          
    return (
        <>
            <h1>useCallback Hook: { counter }</h1>
            <hr />

            <ShowIncrement increment={ fnIncrement }/>
        </>
    )
}