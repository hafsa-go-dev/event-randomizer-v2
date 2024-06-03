import {useState} from "react";

export default function Result({chosenEvent}) {
    return (
        <div className="result-panel">
            <div className="result-label"><h2>RNG Goddesses have chosen:</h2></div>
            <div className="result"><h3 className="event-result">{chosenEvent}</h3></div>
        </div>
    );
}