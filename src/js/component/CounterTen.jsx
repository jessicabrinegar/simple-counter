import React, {useEffect} from "react";

export default function CounterTen (props){

    useEffect(() => {
        let increment = null;

        if (props.active === true){
            increment = setInterval(() => {
                props.handleCounting((count) => count + 1)
            },10000);
        }
        return () => {
            clearInterval(increment);
        }
    }, [props.active])

    return (
        <h1 className="text-light">{props.count % 10}</h1>
    )

}