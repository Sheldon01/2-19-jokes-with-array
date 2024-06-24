import React from 'react';

function Joke(props) {
    console.log("My props punchline was called and received " + props.punchline)
    return (
        <div className="joke">
            <h3>{props.setup}</h3>
            <p>{props.punchline}</p>
            <hr />
        </div>
    );
}
export default Joke;
