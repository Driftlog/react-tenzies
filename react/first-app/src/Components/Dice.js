import React from "react";
import './Dice.css'

export default function Dice(props) {
    const diceStyle = {
        backgroundColor: props.freeze ? "#59E391" : "white"
    }

    return <div className="face" onClick={props.freezeDice} style={diceStyle}>
            <h2>{props.val}</h2>
        </div>
}