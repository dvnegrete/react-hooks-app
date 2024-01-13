import { useEffect, useState } from "react"

export const useFetch = (url:string)=> {

    const [ state, setState ] = useState({
        data: null,
        isLoading: true,
        handlerError: null
    })
    
    const getFetch =async () => {
        setState({
            ...state,
            isLoading: true,
        });

        const res = await fetch(url);
        const data = await res.json();

        setState({
            data,
            isLoading: false,
            handlerError: null
        });
    }

    useEffect(()=>{
        getFetch();
    }, [url]);

    return { 
        data: state.data,
        isLoading: state.isLoading,
        handlerError: state.handlerError,
    };
}