import React, {useState} from "react";

// import Buttons from "./buttons.jsx"

const Counter = () => {
    // Name of the variable, then a function that will change the value of the variable
    // Put initial value of counter in parentheses of useState fx
    const [counter,setCounter] = useState(0);
    const [digits, setDigits] = useState('00000')
    function increment(){
        setInterval(() => {
            setCounter((counter) => counter + 1)
        },1000)
    }
    function writeDigits(){
        setInterval(() => {
            setDigits((digits) =>digits.slice(1))
        }, 10000)
    }
    return (
        <div>
        <h1>{digits}{counter}</h1>
        <button onClick={increment}>Start</button>
        </div>
    )
}
export default Counter;