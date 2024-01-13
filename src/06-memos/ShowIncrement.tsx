import { memo } from 'react';

export const ShowIncrement = memo(( { increment }:any )=> {
          console.log("SHOW!!!");
          
    return (
        <button 
            className="btn btn-primary" 
            onClick={ ()=> increment(5) }
        >
           Incrementar
        </button>
    )
})