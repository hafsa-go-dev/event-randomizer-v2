import {useState} from "react";

export default function EventGrid({removeMode, removeEvent, eventsList, chosenEvent}) {
    let sortedEvents;

    sortedEvents = eventsList.slice().sort((a, b) => a.name.localeCompare(b.name));



    return (
        <div className="grid-container">{
            sortedEvents.map(event => (<div className={chosenEvent === event.name ? "cell active" : "cell"}>{event.name} {removeMode && (
                <button onClick={() => removeEvent(event.id)} className="remove-button">❌</button>
            )}</div>))
        }</div>
    );
}