import React from "react";
import "../App.css";

function Bomb() {
    throw new Error('💥 CABOOM 💥')
}

//Test Error Boundary
function TestErrorBoundary({ explode, setExplode }) {
    return (
        <div><h1>TESTING ERROR BOUNDARY</h1>
            <p><button onClick={() => setExplode(e => !e)}>toggle explode</button></p>
            <div>{explode ? <Bomb /> : null}</div></div>

    );
};
export default TestErrorBoundary;