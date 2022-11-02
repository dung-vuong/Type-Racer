import React from "react";

const StatDisplay = (props) => {

    return(
        <div>
            Words Per Minute: {props.wpm} Percent Error: {props.error}% 
            {props.gamemode === "time" ? " Words Typed: " + props.wordsTyped : " Time to Complete: " + props.time}
        </div>
    );
}

export default StatDisplay;