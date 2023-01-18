import React from "react";

export default function Numbers(props){
    
    let hrs = Math.floor(props.count / 3600);
    let mins = Math.floor((props.count - (hrs * 3600))/ 60);
    let secs = props.count % 60;

    return(
        <h1 className="bg-dark text-light">{hrs}:{mins}:{secs}</h1>
    )
}