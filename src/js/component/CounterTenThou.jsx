import React, {useEffect} from "react";

export default function CounterTenThou (props){

    useEffect(() => {
        let increment = null;

        if (props.active === true){
            increment = setInterval(() => {
                props.handleCounting((count) => count + 1)
            },10000000);
        }
        return () => {
            clearInterval(increment);
        }
    }, [props.active])

    return (
        <h1 className="text-light">{props.count % 10}</h1>
    )
}