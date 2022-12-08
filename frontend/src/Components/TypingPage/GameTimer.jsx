/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { useEffect, useRef } from "react";

const GameTimer = (props) => {
    const ref = useRef(null);

    const getTimeRemaining = (e) => {
        const total = Date.parse(e) - Date.parse(new Date());
        const seconds = Math.floor((total / 1000) % 60);
        const minutes = Math.floor((total / 1000 / 60) % 60);
        return {
            total, minutes, seconds
        };
    }

    const getTimeSince = (e) => {
        const total = Date.parse(new Date()) - Date.parse(e);   
        const seconds = Math.floor((total / 1000) % 60);
        const minutes = Math.floor((total / 1000 / 60) % 60);
        return {
            total, minutes, seconds
        };
    }

    const getDeadLineTime = () => {
        let deadline = new Date();
        deadline.setSeconds(deadline.getSeconds() + props.time);
        return deadline;
    }

    const getStartTime = () => {
        let startTime = new Date();
        return startTime;
    }

    const startTimeMode = (e) => {
        let { total, minutes, seconds } = getTimeRemaining(e);
        if (total >= 0) {
            props.setTimer(
                (minutes > 9 ? minutes : '0' + minutes) + ':'
                + (seconds > 9 ? seconds : '0' + seconds)
            )
        }
    }

    const startWordMode = (e) => {
        let { total, minutes, seconds } = getTimeSince(e);
        if (total >= 0) {
            props.setTimer(
                (minutes > 9 ? minutes : '0' + minutes) + ':'
                + (seconds > 9 ? seconds : '0' + seconds)
            )
        }
    }
    const clearTimeMode = (e) => {
        if(props.time === 30)
            props.setTimer('00:30');
        else if(props.time === 60)
            props.setTimer('01:00');
        else
            props.setTimer('02:00');
        if (ref.current) clearInterval(ref.current);
        const id = setInterval(() => {
            startTimeMode(e);
        }, 1000)
        ref.current = id;
    }

    const clearWordMode = (e) => {
        props.setTimer('00:00');
        if (ref.current) clearInterval(ref.current);
        const id = setInterval(() => {
            startWordMode(e);
        }, 1000)
        ref.current = id;
    }

    useEffect(() => {
        if(!props.active){
            clearInterval(ref.current);
            props.setTimer("");
        }
    }, [props.active])

    useEffect(() => {
        if(!props.active)
            return;
        clearInterval(ref.current);
        if(props.gamemode === "time")
            clearTimeMode(getDeadLineTime());
        else if(props.gamemode === "word")
            clearWordMode(getStartTime());
    }, [props.active]);

    return(
        <div>
            {props.timer}
        </div>
    );
}

export default GameTimer