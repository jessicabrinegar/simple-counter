import React, {useState} from "react";
import CounterOne from "./CounterOne.jsx"
import CounterTen from "./CounterTen.jsx"
import CounterHund from "./CounterHund.jsx"
import CounterThou from "./CounterThou.jsx"
import CounterTenThou from "./CounterTenThou.jsx"
import CounterHundThou from "./CounterHundThou.jsx"
import Buttons from "./Buttons.jsx";

const Timer = () => {
    const [counterOne,setCounterOne] = useState(0);
    const [counterTen,setCounterTen] = useState(0);
    const [counterHund,setCounterHund] = useState(0);
    const [counterThou,setCounterThou] = useState(0);
    const [counterTenThou,setCounterTenThou] = useState(0);
    const [counterHundThou,setCounterHundThou] = useState(0);
    const [isActive, setIsActive] = useState(false);

    const startCounter = () => {
        setIsActive(true);
    };
    const stopCounter = () => {
        setIsActive(false);
    };

    return (
        <div>
            <div className = "bg-dark d-flex justify-content-center mb-3">
            <CounterHundThou count={counterHundThou} handleCounting = {setCounterHundThou} active={isActive}/>
            <CounterTenThou count={counterTenThou} handleCounting = {setCounterTenThou} active={isActive}/>
            <CounterThou count={counterThou} handleCounting = {setCounterThou} active={isActive}/>
            <CounterHund count={counterHund} handleCounting = {setCounterHund} active={isActive}/>
            <CounterTen count={counterTen} handleCounting = {setCounterTen} active={isActive}/>
            <CounterOne count={counterOne} handleCounting = {setCounterOne} active={isActive}/>
            </div>
            <Buttons handleStart={startCounter} active={isActive} handleStop={stopCounter}/>
        </div>
    )
}
export default Timer;