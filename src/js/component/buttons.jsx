import React from "react";
// import Counter from "./counter.jsx"

export default function Buttons(props){
    const startButton = (
        <button onClick={props.handleStart}>Start</button>
    )
    const stopButton = (
        <button onClick={props.handleStop}>Stop</button>
    )
    return (
        <div className="mb-3">
            {props.active ? stopButton : startButton}
        </div>
    );
}