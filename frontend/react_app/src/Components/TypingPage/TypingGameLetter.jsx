import React from "react";
import { useState, useEffect } from "react";
import './TypingGameLetter.css'

const TypingGameLetter = (props) => {
    return(
        <span className={props.status}>{props.letter}</span>
    );
}

export default TypingGameLetter