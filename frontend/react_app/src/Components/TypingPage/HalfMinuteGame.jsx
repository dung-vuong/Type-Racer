import React from 'react';
import { useMemo } from 'react';
import '../../Styles/TypingPage/HalfMinuteGame.css';

const HalfMinuteGame = (props)  => {

    console.log('moo');

    const displayWords = useMemo(() => {
        let list = [];
        props.words.forEach((data) => {
            list.push(<div className='word'>{data} </div>);
        })
        return list;
    },
    [props.words]
    );

    return (
        <div className='game'>
        <input className='gameInput'></input>
        <div>{displayWords}</div>
        </div>
    )
}

export default HalfMinuteGame;