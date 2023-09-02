
import React from 'react';
import '../styles/GameSelector.scss';

const GameSelector = () => {
    return (
        <div id="GameSelector" style={{"--sprite-sheet": `url(${process.env.PUBLIC_URL + "/images/logos_med.png"})`} as React.CSSProperties}>
            <div className="game-icon game-icon-hover" style={{"--sprite-position": "0", "--sprite-position-hover": "-63px"} as React.CSSProperties}></div>
            <div className="game-icon disabled" style={{"--sprite-position": "-128px"} as React.CSSProperties}></div>
            <div className="game-icon disabled" style={{"--sprite-position": "-192px"} as React.CSSProperties}></div>
        </div>
    )
}

export default GameSelector;