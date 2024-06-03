import {useState} from "react";

export default function Header({addEvent, toggleRemove, chooseEvent}) {

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    async function cycle() {
        for (let i = 1; i < 10; i++) {
            chooseEvent()
            await sleep(200);
        }
    }

    const [optionsOpen, setOptionsOpen] = useState(false);

    const [newEvent, setNewEvent] = useState("");


    function toggleOptions() {
        setOptionsOpen(optionsOpen => !optionsOpen);
    }

    function handleSubmit(e) {
        e.preventDefault();

        addEvent({name: newEvent, id: Date.now()});
    }



    return (<>
            <div className="header">
                <div><h1>OSRS Event Randomizer</h1></div>
                <div className="randomizer">
                    <button className="randomizer-button" onClick={cycle}>Randomize!</button>
                    <button className="options-button" onClick={toggleOptions}>Options</button>
                </div>

            </div>
            {optionsOpen ? <div className="options-screen">
                <form className="add-form" onSubmit={handleSubmit}>
                    <h2>Add Event:</h2>
                    <input className="input-box" type="text" placeholder="Event name..." value={newEvent} onChange={(e) => setNewEvent(e.target.value)}/>
                        <button className="add-button">Add</button>
                </form>
                <div>
                    <div className="toggle-remove" onClick={toggleRemove}><h2>Toggle Remove Event</h2></div>
            </div>
            </div> : <></>
            }</>
    );
}