import React, {useEffect, useState} from "react";
import Buttons from "./buttons.jsx";
import Numbers from "./numbers.jsx";

const Counter = () => {
    // Name of the variable, then a function that will change the value of the variable
    // Put initial value of counter in parentheses of useState fx
    const [counter,setCounter] = useState(0);
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        let increment = null; 

        if (isActive === true){
            increment = setInterval(() => {
                setCounter((counter) => counter + 1)
            },1000);
        } else{
            clearInterval(increment);
        }
        return () => {
            clearInterval(increment);
        };
    }, [isActive])

    const startCounter = () => {
        setIsActive(true);
        // setIsPaused(false);
    };
    const stopCounter = () => {
        setIsActive(false);
        // setIsPaused(false);
    };

    return (
        <div>
        <Numbers count={counter}/>
        <Buttons 
        handleStart={startCounter}
        active={isActive}
        handleStop={stopCounter}
        />
        </div>
    )
}
export default Counter;