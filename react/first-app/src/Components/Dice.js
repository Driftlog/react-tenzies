import React from "react";
import './Dice.css'


export default function Dice(props) {


    return <div className="face" onClick={props.freezeDice}>
            <h2>{props.val}</h2>
        </div>
}