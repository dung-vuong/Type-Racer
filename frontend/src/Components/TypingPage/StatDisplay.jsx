import React from "react";
import './StatDisplay.css'

const StatDisplay = (props) => {

    return (
        <div className="statDisplayWrapper">
            <div className="wpmStat">Words Per Minute: {props.wpm}</div>
            <div className="errorStat">Percent Error: {props.error}%</div>
            <div className="gamemodeStat">
                {props.gamemode === "time" ? "Words Typed: " + props.wordsTyped : "Time to Complete: " + props.time}
            </div>
        </div>
    );
}

export default StatDisplay;