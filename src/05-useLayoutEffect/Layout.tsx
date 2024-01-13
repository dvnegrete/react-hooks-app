import { useCounter, useFetch } from "../hooks";
import { LoadingQuote, Quote } from "../03-examples";

export const Layout = ()=> {
    const { counter, increment } = useCounter(1);
    const resp = useFetch(`https://api.breakingbadquotes.xyz/v1/quotes/${counter}`);
    const { isLoading, data } = resp;
    const { author='', quote='' } = !!data && data[0];
       
    return (
        <>
            <h1>BreakingBad Quotes</h1>
            <hr />

            { isLoading ? <LoadingQuote/> : <Quote author={ author } quote={ quote } /> }

            <button 
                className="btn btn-primary" 
                onClick={ ()=> increment() }
                disabled= { isLoading }>
            Next Quote
            </button>

        </>
    )
}