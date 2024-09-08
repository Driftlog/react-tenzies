import React from "react";
import './Dice.css'

export default function Dice(props) {
    console.log(props.val)

    return <div className="face" onClick={props.freezeDice}>
            <h2>{props.val}</h2>
        </div>
}