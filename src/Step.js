import React from "react";
import './Step.css';

function Step(props) {
    return (
        <div className="input">
            <p>Krok:</p> <input type="number" min={1} onChange={(e)=>props.changeStep(e.target.value)} />
        </div>
    )
}
export default Step;