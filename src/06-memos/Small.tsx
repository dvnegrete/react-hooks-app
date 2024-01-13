import { memo } from 'react';

export const Small = memo(({value}:any)=> {

    console.log("Me dibuje :(");
    
    return (
        <>
        <small>{value} </small>
        </>
    )
})