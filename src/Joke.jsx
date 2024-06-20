import React from "react";

function Joke(props) {
    return (
        <div className="joke">
            <h3>{props.setup}</h3>
            <p>{props.punchline}</p>
        </div>
    );
}

export default Joke;
