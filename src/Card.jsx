import React from 'react';
import { robots } from './robots';
import { CSSProperties } from './card.css';
import { getRandomRobot } from './robots.js';

// template for card display
const Card = (props) => {
    const randomRobot = getRandomRobot();
    const handleClick = () => {
        props.onDelete(props.id);
    };
    return (
        <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img alt='creature' src={`https://robohash.org/${randomRobot.username}?set=set2`} />
            <div>
                <h2>{randomRobot.name}</h2>
                <p>{randomRobot.job}</p>
                <button className='add' onClick={handleClick}>Fire This Creep</button>
            </div>
        </div>
    );
}

export default Card;