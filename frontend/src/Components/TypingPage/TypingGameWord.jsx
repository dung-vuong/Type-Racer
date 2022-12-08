import React from "react";
import "./TypingGameWord.css";

const TypingGameWord = (props) => {

    return(
        <div className="gameWord">
            {props.letters}
        </div>
    );
}

export default TypingGameWord;